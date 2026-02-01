/**
 * API Configuration
 * 
 * Centralized configuration for API settings including base URL,
 * timeout settings, endpoints, and retry configuration.
 */

/** @type {string} */
export const API_BASE_URL = import.meta.env.VITE_API_URL;

/** @type {number} */
export const API_TIMEOUT = 30000; // 30 seconds

/** @type {number} */
export const API_MAX_RETRIES = 3;

/** @type {number} */
export const API_RETRY_DELAY = 1000; // 1 second initial delay

/**
 * API Endpoints
 * @readonly
 * @enum {string}
 */
export const API_ENDPOINTS = {
    WAITLIST: '/api/waitlist',
    WAITLIST_JOIN: '/api/waitlist/join',
};

/**
 * Retry Configuration
 * @typedef {Object} RetryConfig
 * @property {number} maxRetries - Maximum number of retry attempts
 * @property {number} initialDelay - Initial delay in milliseconds
 * @property {number} maxDelay - Maximum delay in milliseconds
 * @property {number} backoffMultiplier - Exponential backoff multiplier
 */

/** @type {RetryConfig} */
export const RETRY_CONFIG = {
    maxRetries: API_MAX_RETRIES,
    initialDelay: API_RETRY_DELAY,
    maxDelay: 10000, // 10 seconds max
    backoffMultiplier: 2,
};

/**
 * HTTP Status Codes
 * @readonly
 * @enum {number}
 */
export const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    TOO_MANY_REQUESTS: 429,
    INTERNAL_SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
};

/**
 * Rate Limit Headers
 * @readonly
 * @enum {string}
 */
export const RATE_LIMIT_HEADERS = {
    LIMIT: 'x-ratelimit-limit',
    REMAINING: 'x-ratelimit-remaining',
    RESET: 'x-ratelimit-reset',
    RETRY_AFTER: 'retry-after',
};
