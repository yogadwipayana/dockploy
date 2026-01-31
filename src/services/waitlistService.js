/**
 * Waitlist Service
 * 
 * API service layer for waitlist-related operations.
 * Provides functions to join the waitlist and get waitlist information.
 */

import axiosInstance from '../api/axiosConfig';
import { API_ENDPOINTS } from '../config/api.config';
import { retryApiCall } from '../utils/retry';

/**
 * @typedef {Object} JoinWaitlistRequest
 * @property {string} email - The email address to add to the waitlist
 */

/**
 * @typedef {Object} JoinWaitlistResponse
 * @property {string} message - Success message
 */

/**
 * @typedef {Object} WaitlistInfoResponse
 * @property {number} count - Number of people on the waitlist
 * @property {string} [message] - Optional message
 */

/**
 * @typedef {Object} WaitlistErrorResponse
 * @property {string} error - Error message
 */

/**
 * Join the waitlist with an email address
 * 
 * @param {string} email - The email address to register
 * @returns {Promise<JoinWaitlistResponse>} Response with success message
 * @throws {Error} When the request fails (validation, duplicate, rate limit, etc.)
 * 
 * @example
 * try {
 *   const result = await join('user@example.com');
 *   console.log(result.message); // "Joined waitlist successfully"
 * } catch (error) {
 *   console.error(error.userMessage); // User-friendly error message
 * }
 */
export async function join(email) {
    const response = await retryApiCall(() =>
        axiosInstance.post(API_ENDPOINTS.WAITLIST_JOIN, { email })
    );

    return response.data;
}

/**
 * Get waitlist information
 * 
 * Retrieves general information about the waitlist including
 * the current count of registered users.
 * 
 * @returns {Promise<WaitlistInfoResponse>} Waitlist information
 * @throws {Error} When the request fails
 * 
 * @example
 * try {
 *   const info = await getInfo();
 *   console.log(`Total waitlist members: ${info.count}`);
 * } catch (error) {
 *   console.error('Failed to get waitlist info:', error.userMessage);
 * }
 */
export async function getInfo() {
    const response = await retryApiCall(() =>
        axiosInstance.get(API_ENDPOINTS.WAITLIST)
    );

    return response.data;
}

/**
 * Check if an email is valid for the waitlist
 * 
 * Performs client-side validation before making API call.
 * 
 * @param {string} email - Email to validate
 * @returns {Object} Validation result
 * @property {boolean} isValid - Whether the email is valid
 * @property {string|null} error - Error message if invalid
 */
export function validateEmail(email) {
    if (!email || typeof email !== 'string') {
        return {
            isValid: false,
            error: 'Email is required',
        };
    }

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
        return {
            isValid: false,
            error: 'Email is required',
        };
    }

    // RFC 5322 compliant email regex (simplified)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmedEmail)) {
        return {
            isValid: false,
            error: 'Please enter a valid email address',
        };
    }

    return {
        isValid: true,
        error: null,
    };
}

/**
 * Waitlist Service Object
 * 
 * Provides a convenient object with all waitlist-related methods.
 */
export const waitlistService = {
    join,
    getInfo,
    validateEmail,
};

export default waitlistService;
