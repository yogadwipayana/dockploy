/**
 * Error Handler Utilities
 * 
 * Provides centralized error handling, user-friendly error message mapping,
 * and utilities for extracting error information from API responses.
 */

import { HTTP_STATUS } from '../config/api.config';

/**
 * Error message mapping for HTTP status codes
 * @type {Record<number, string>}
 */
const ERROR_MESSAGES = {
    [HTTP_STATUS.BAD_REQUEST]: 'Invalid request. Please check your input and try again.',
    [HTTP_STATUS.UNAUTHORIZED]: 'Please log in to continue.',
    [HTTP_STATUS.FORBIDDEN]: 'You do not have permission to perform this action.',
    [HTTP_STATUS.NOT_FOUND]: 'The requested resource was not found.',
    [HTTP_STATUS.CONFLICT]: 'This email is already registered on the waitlist.',
    [HTTP_STATUS.TOO_MANY_REQUESTS]: 'Too many requests. Please wait before trying again.',
    [HTTP_STATUS.INTERNAL_SERVER_ERROR]: 'Server error. Please try again later.',
    [HTTP_STATUS.BAD_GATEWAY]: 'Service temporarily unavailable. Please try again later.',
    [HTTP_STATUS.SERVICE_UNAVAILABLE]: 'Service temporarily unavailable. Please try again later.',
    [HTTP_STATUS.GATEWAY_TIMEOUT]: 'Request timed out. Please try again.',
};

/**
 * Default error messages for different error types
 * @type {Record<string, string>}
 */
const DEFAULT_MESSAGES = {
    network: 'Network error. Please check your internet connection and try again.',
    timeout: 'Request timed out. Please try again.',
    unknown: 'An unexpected error occurred. Please try again.',
    validation: 'Please check your input and try again.',
};

/**
 * Extracts a user-friendly error message from an error object
 * 
 * @param {Error|import('axios').AxiosError} error - The error object
 * @returns {string} User-friendly error message
 */
export function getErrorMessage(error) {
    // If the error already has a user message from interceptors, use it
    if (error?.userMessage) {
        return error.userMessage;
    }

    // Handle Axios errors with response
    if (error?.response) {
        const status = error.response.status;

        // Try to get message from response data
        const serverMessage = error.response.data?.error;
        if (serverMessage) {
            return serverMessage;
        }

        // Fall back to mapped messages
        return ERROR_MESSAGES[status] || DEFAULT_MESSAGES.unknown;
    }

    // Handle network errors
    if (error?.request && !error?.response) {
        return DEFAULT_MESSAGES.network;
    }

    // Handle timeout errors
    if (error?.code === 'ECONNABORTED' || error?.message?.includes('timeout')) {
        return DEFAULT_MESSAGES.timeout;
    }

    // Handle generic errors
    return error?.message || DEFAULT_MESSAGES.unknown;
}

/**
 * Extracts the HTTP status code from an error
 * 
 * @param {Error|import('axios').AxiosError} error - The error object
 * @returns {number|null} HTTP status code or null
 */
export function getErrorStatusCode(error) {
    return error?.response?.status || error?.statusCode || null;
}

/**
 * Checks if an error is a network error
 * 
 * @param {Error|import('axios').AxiosError} error - The error object
 * @returns {boolean}
 */
export function isNetworkError(error) {
    return !error?.response && !!error?.request;
}

/**
 * Checks if an error is a timeout error
 * 
 * @param {Error|import('axios').AxiosError} error - The error object
 * @returns {boolean}
 */
export function isTimeoutError(error) {
    return error?.code === 'ECONNABORTED' || error?.message?.includes('timeout');
}

/**
 * Checks if an error is a rate limit error (429)
 * 
 * @param {Error|import('axios').AxiosError} error - The error object
 * @returns {boolean}
 */
export function isRateLimitError(error) {
    return getErrorStatusCode(error) === HTTP_STATUS.TOO_MANY_REQUESTS;
}

/**
 * Extracts retry-after value from rate limit errors
 * 
 * @param {Error|import('axios').AxiosError} error - The error object
 * @returns {number|null} Seconds to wait before retry, or null
 */
export function getRetryAfter(error) {
    if (!isRateLimitError(error)) {
        return null;
    }

    // Check if already parsed by interceptor
    if (error?.retryAfter) {
        return parseInt(error.retryAfter, 10);
    }

    // Extract from response headers
    const retryAfter = error?.response?.headers?.['retry-after'];
    if (retryAfter) {
        return parseInt(retryAfter, 10);
    }

    return null;
}

/**
 * Checks if an error is retryable (network errors, timeouts, 5xx errors)
 * 
 * @param {Error|import('axios').AxiosError} error - The error object
 * @returns {boolean}
 */
export function isRetryableError(error) {
    const status = getErrorStatusCode(error);

    // Network errors and timeouts are always retryable
    if (isNetworkError(error) || isTimeoutError(error)) {
        return true;
    }

    // 5xx server errors are retryable
    if (status && status >= 500 && status < 600) {
        return true;
    }

    // 429 rate limit is retryable (after waiting)
    if (status === HTTP_STATUS.TOO_MANY_REQUESTS) {
        return true;
    }

    return false;
}

/**
 * Creates a structured error object with all relevant information
 * 
 * @param {Error|import('axios').AxiosError} error - The error object
 * @returns {Object} Structured error information
 */
export function createErrorInfo(error) {
    const statusCode = getErrorStatusCode(error);

    return {
        message: getErrorMessage(error),
        statusCode,
        isNetworkError: isNetworkError(error),
        isTimeoutError: isTimeoutError(error),
        isRateLimitError: isRateLimitError(error),
        isRetryable: isRetryableError(error),
        retryAfter: getRetryAfter(error),
        originalError: error,
    };
}

/**
 * Error handler class for managing error state
 */
export class ErrorHandler {
    constructor() {
        this.error = null;
        this.errorInfo = null;
    }

    /**
     * Set the current error
     * @param {Error|import('axios').AxiosError} error 
     */
    setError(error) {
        this.error = error;
        this.errorInfo = createErrorInfo(error);
    }

    /**
     * Clear the current error
     */
    clearError() {
        this.error = null;
        this.errorInfo = null;
    }

    /**
     * Check if there is an error
     * @returns {boolean}
     */
    hasError() {
        return this.error !== null;
    }

    /**
     * Get the error message
     * @returns {string|null}
     */
    getMessage() {
        return this.errorInfo?.message || null;
    }

    /**
     * Get the status code
     * @returns {number|null}
     */
    getStatusCode() {
        return this.errorInfo?.statusCode || null;
    }

    /**
     * Check if the error is retryable
     * @returns {boolean}
     */
    isRetryable() {
        return this.errorInfo?.isRetryable || false;
    }

    /**
     * Get retry after seconds
     * @returns {number|null}
     */
    getRetryAfter() {
        return this.errorInfo?.retryAfter || null;
    }
}

export default {
    getErrorMessage,
    getErrorStatusCode,
    isNetworkError,
    isTimeoutError,
    isRateLimitError,
    getRetryAfter,
    isRetryableError,
    createErrorInfo,
    ErrorHandler,
};
