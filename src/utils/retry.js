/**
 * Retry Utility
 * 
 * Provides retry logic with exponential backoff for async operations.
 * Useful for handling transient failures in API calls.
 */

import { RETRY_CONFIG } from '../config/api.config';

/**
 * Delay function that returns a promise
 * 
 * @param {number} ms - Milliseconds to delay
 * @returns {Promise<void>}
 */
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Calculate delay with exponential backoff
 * 
 * @param {number} attempt - Current attempt number (0-indexed)
 * @param {number} initialDelay - Initial delay in milliseconds
 * @param {number} maxDelay - Maximum delay in milliseconds
 * @param {number} backoffMultiplier - Multiplier for exponential backoff
 * @returns {number} Delay in milliseconds
 */
function calculateDelay(attempt, initialDelay, maxDelay, backoffMultiplier) {
    const delayMs = initialDelay * Math.pow(backoffMultiplier, attempt);
    return Math.min(delayMs, maxDelay);
}

/**
 * Retry an async function with exponential backoff
 * 
 * @template T
 * @param {() => Promise<T>} fn - Async function to retry
 * @param {Object} options - Retry options
 * @param {number} [options.maxRetries=RETRY_CONFIG.maxRetries] - Maximum retry attempts
 * @param {number} [options.initialDelay=RETRY_CONFIG.initialDelay] - Initial delay in ms
 * @param {number} [options.maxDelay=RETRY_CONFIG.maxDelay] - Maximum delay in ms
 * @param {number} [options.backoffMultiplier=RETRY_CONFIG.backoffMultiplier] - Backoff multiplier
 * @param {(error: Error) => boolean} [options.shouldRetry] - Function to determine if error is retryable
 * @param {(attempt: number, error: Error, nextDelay: number) => void} [options.onRetry] - Callback on retry
 * @returns {Promise<T>} Result of the function
 * @throws {Error} Last error encountered after all retries exhausted
 * 
 * @example
 * const result = await retryWithBackoff(
 *   () => fetchData(),
 *   { maxRetries: 3, onRetry: (attempt, error) => console.log(`Retry ${attempt}`) }
 * );
 */
export async function retryWithBackoff(fn, options = {}) {
    const {
        maxRetries = RETRY_CONFIG.maxRetries,
        initialDelay = RETRY_CONFIG.initialDelay,
        maxDelay = RETRY_CONFIG.maxDelay,
        backoffMultiplier = RETRY_CONFIG.backoffMultiplier,
        shouldRetry = () => true,
        onRetry = null,
    } = options;

    let lastError;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
            return await fn();
        } catch (error) {
            lastError = error;

            // Check if we should retry this error
            if (attempt < maxRetries && shouldRetry(error)) {
                const nextDelay = calculateDelay(attempt, initialDelay, maxDelay, backoffMultiplier);

                // Call onRetry callback if provided
                if (onRetry) {
                    onRetry(attempt + 1, error, nextDelay);
                }

                // Wait before retrying
                await delay(nextDelay);
            } else {
                // Don't retry, throw the error
                break;
            }
        }
    }

    throw lastError;
}

/**
 * Retry configuration specifically for API calls
 * 
 * @type {Object}
 */
export const API_RETRY_OPTIONS = {
    maxRetries: RETRY_CONFIG.maxRetries,
    initialDelay: RETRY_CONFIG.initialDelay,
    maxDelay: RETRY_CONFIG.maxDelay,
    backoffMultiplier: RETRY_CONFIG.backoffMultiplier,
    shouldRetry: (error) => {
        // Retry on network errors
        if (!error.response && error.request) {
            return true;
        }

        // Retry on timeout
        if (error.code === 'ECONNABORTED') {
            return true;
        }

        // Retry on 5xx server errors
        if (error.response?.status >= 500 && error.response?.status < 600) {
            return true;
        }

        // Retry on rate limit (429) - the caller should handle the delay
        if (error.response?.status === 429) {
            return true;
        }

        return false;
    },
};

/**
 * Retry an API call with standard retry logic
 * 
 * @template T
 * @param {() => Promise<T>} apiCall - API call function
 * @param {Object} [options] - Additional retry options
 * @returns {Promise<T>} API response
 */
export async function retryApiCall(apiCall, options = {}) {
    return retryWithBackoff(apiCall, {
        ...API_RETRY_OPTIONS,
        ...options,
    });
}

/**
 * Creates a retry wrapper for a function
 * 
 * @template T
 * @param {(...args: any[]) => Promise<T>} fn - Function to wrap
 * @param {Object} [options] - Retry options
 * @returns {(...args: any[]) => Promise<T>} Wrapped function with retry logic
 */
export function withRetry(fn, options = {}) {
    return (...args) => retryWithBackoff(() => fn(...args), options);
}

export default {
    retryWithBackoff,
    retryApiCall,
    withRetry,
    API_RETRY_OPTIONS,
};
