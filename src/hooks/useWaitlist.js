/**
 * useWaitlist Hook
 * 
 * React hook for managing waitlist join operations.
 * Provides state management for loading, error, success states,
 * and automatic countdown for rate limiting.
 */

import { useState, useCallback, useRef, useEffect } from 'react';
import { join, validateEmail } from '../services/waitlistService';
import { getErrorMessage, getRetryAfter, isRateLimitError } from '../api/errorHandler';
import { setupInterceptors } from '../api/interceptors';

// Setup API interceptors once when the module loads
setupInterceptors();

/**
 * @typedef {Object} UseWaitlistState
 * @property {boolean} isLoading - Whether a request is in progress
 * @property {string|null} error - Error message if request failed
 * @property {boolean} isSuccess - Whether the last request was successful
 * @property {number|null} retryAfter - Seconds to wait before retry (for rate limiting)
 * @property {number} countdown - Current countdown value for rate limiting
 */

/**
 * @typedef {Object} UseWaitlistActions
 * @property {(email: string) => Promise<void>} joinWaitlist - Function to join the waitlist
 * @property {() => void} reset - Reset all states
 */

/**
 * @typedef {UseWaitlistState & UseWaitlistActions} UseWaitlistReturn
 */

/**
 * Hook for managing waitlist operations
 * 
 * @returns {UseWaitlistReturn} Hook state and actions
 * 
 * @example
 * function WaitlistForm() {
 *   const { 
 *     joinWaitlist, 
 *     isLoading, 
 *     error, 
 *     isSuccess, 
 *     retryAfter, 
 *     countdown,
 *     reset 
 *   } = useWaitlist();
 *   
 *   const handleSubmit = async (email) => {
 *     await joinWaitlist(email);
 *   };
 *   
 *   return (
 *     <form onSubmit={handleSubmit}>
 *       {error && <div className="error">{error}</div>}
 *       {isSuccess && <div className="success">You're on the list!</div>}
 *       {retryAfter && <div>Please wait {countdown} seconds...</div>}
 *       <input type="email" disabled={isLoading} />
 *       <button disabled={isLoading || countdown > 0}>
 *         {isLoading ? 'Loading...' : 'Join'}
 *       </button>
 *     </form>
 *   );
 * }
 */
export function useWaitlist() {
    // State
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);
    const [retryAfter, setRetryAfter] = useState(null);
    const [countdown, setCountdown] = useState(0);

    // Refs for managing countdown timer
    const countdownIntervalRef = useRef(null);
    const abortControllerRef = useRef(null);

    /**
     * Clear countdown interval
     */
    const clearCountdown = useCallback(() => {
        if (countdownIntervalRef.current) {
            clearInterval(countdownIntervalRef.current);
            countdownIntervalRef.current = null;
        }
    }, []);

    /**
     * Start countdown timer
     * @param {number} seconds - Seconds to count down from
     */
    const startCountdown = useCallback((seconds) => {
        clearCountdown();
        setCountdown(seconds);

        countdownIntervalRef.current = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearCountdown();
                    setRetryAfter(null);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    }, [clearCountdown]);

    /**
     * Reset all states
     */
    const reset = useCallback(() => {
        setIsLoading(false);
        setError(null);
        setIsSuccess(false);
        setRetryAfter(null);
        setCountdown(0);
        clearCountdown();

        // Abort any in-flight request
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
            abortControllerRef.current = null;
        }
    }, [clearCountdown]);

    /**
     * Join the waitlist
     * @param {string} email - Email address to register
     * @returns {Promise<void>}
     */
    const joinWaitlist = useCallback(async (email) => {
        // Reset previous states
        setError(null);
        setIsSuccess(false);
        setRetryAfter(null);
        clearCountdown();

        // Client-side validation
        const validation = validateEmail(email);
        if (!validation.isValid) {
            setError(validation.error);
            return;
        }

        // Check if we're in a rate limit cooldown
        if (countdown > 0) {
            setError(`Please wait ${countdown} seconds before trying again.`);
            return;
        }

        setIsLoading(true);

        // Create abort controller for this request
        abortControllerRef.current = new AbortController();

        try {
            const result = await join(email);
            setIsSuccess(true);
            return result;
        } catch (err) {
            // Handle rate limiting
            if (isRateLimitError(err)) {
                const retrySeconds = getRetryAfter(err);
                if (retrySeconds && retrySeconds > 0) {
                    setRetryAfter(retrySeconds);
                    startCountdown(retrySeconds);
                }
            }

            // Set user-friendly error message
            const errorMessage = getErrorMessage(err);
            setError(errorMessage);

            // Re-throw for callers who want to handle errors themselves
            throw err;
        } finally {
            setIsLoading(false);
            abortControllerRef.current = null;
        }
    }, [countdown, clearCountdown, startCountdown]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            clearCountdown();
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };
    }, [clearCountdown]);

    return {
        // State
        isLoading,
        error,
        isSuccess,
        retryAfter,
        countdown,

        // Actions
        joinWaitlist,
        reset,
    };
}

/**
 * Hook for managing multiple waitlist forms independently
 *
 * Useful when you have multiple waitlist forms on the same page
 * and want each to have its own state.
 *
 * @param {string} formId - Unique identifier for the form instance (reserved for future use)
 * @returns {UseWaitlistReturn} Hook state and actions
 *
 * @example
 * function PageWithTwoForms() {
 *   const heroForm = useWaitlistInstance('hero');
 *   const footerForm = useWaitlistInstance('footer');
 *
 *   return (
 *     <>
 *       <HeroForm {...heroForm} />
 *       <FooterForm {...footerForm} />
 *     </>
 *   );
 * }
 */
export function useWaitlistInstance(formId) {
    // This is essentially an alias for useWaitlist that could be extended
    // to share state between instances if needed in the future
    // formId is reserved for future use when implementing shared state
    void formId; // Explicitly mark as intentionally unused
    return useWaitlist();
}

export default useWaitlist;
