import axiosInstance from './axiosConfig';
import { RATE_LIMIT_HEADERS, HTTP_STATUS } from '../config/api.config';

/**
 * Request Interceptor
 * 
 * Adds metadata for debugging and timing, and can be extended
 * to add authentication headers or other request modifications.
 * 
 * @param {import('axios').InternalAxiosRequestConfig} config - Axios request config
 * @returns {import('axios').InternalAxiosRequestConfig}
 */
const requestInterceptor = (config) => {
    // Add request timestamp for debugging and performance tracking
    config.metadata = {
        startTime: Date.now(),
        requestId: Math.random().toString(36).substring(2, 15),
    };

    // Log request in development
    if (import.meta.env.DEV) {
        console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`);
    }

    return config;
};

/**
 * Request Error Interceptor
 * 
 * Handles request configuration errors.
 * 
 * @param {Error} error - Request error
 * @returns {Promise<never>}
 */
const requestErrorInterceptor = (error) => {
    console.error('[API Request Error]', error);
    return Promise.reject(error);
};

/**
 * Response Interceptor
 * 
 * Extracts rate limit headers, logs response time, and enriches
 * the response with additional metadata.
 * 
 * @param {import('axios').AxiosResponse} response - Axios response
 * @returns {import('axios').AxiosResponse}
 */
const responseInterceptor = (response) => {
    const duration = Date.now() - (response.config.metadata?.startTime || Date.now());

    // Extract rate limit headers from response
    const rateLimitInfo = {
        limit: response.headers[RATE_LIMIT_HEADERS.LIMIT],
        remaining: response.headers[RATE_LIMIT_HEADERS.REMAINING],
        reset: response.headers[RATE_LIMIT_HEADERS.RESET],
        retryAfter: response.headers[RATE_LIMIT_HEADERS.RETRY_AFTER],
    };

    // Log response in development
    if (import.meta.env.DEV) {
        console.log(`[API Response] ${response.config.method?.toUpperCase()} ${response.config.url} - ${response.status} (${duration}ms)`);
    }

    // Attach rate limit info to response for downstream use
    response.rateLimitInfo = rateLimitInfo;

    return response;
};

/**
 * Response Error Interceptor
 * 
 * Handles HTTP error responses, extracts user-friendly error messages,
 * and attaches rate limit information for 429 errors.
 * 
 * @param {import('axios').AxiosError} error - Axios error
 * @returns {Promise<never>}
 */
const responseErrorInterceptor = (error) => {
    const { response, request, message } = error;

    // Handle HTTP error responses
    if (response) {
        const duration = Date.now() - (response.config?.metadata?.startTime || Date.now());

        // Log error in development
        if (import.meta.env.DEV) {
            console.error(`[API Error] ${response.config?.method?.toUpperCase()} ${response.config?.url} - ${response.status} (${duration}ms)`, response.data);
        }

        // Attach user-friendly error message based on status code
        switch (response.status) {
            case HTTP_STATUS.BAD_REQUEST:
                error.userMessage = response.data?.error || 'Invalid request. Please check your input.';
                break;

            case HTTP_STATUS.UNAUTHORIZED:
                error.userMessage = 'Please log in to continue.';
                break;

            case HTTP_STATUS.FORBIDDEN:
                error.userMessage = 'You do not have permission to perform this action.';
                break;

            case HTTP_STATUS.NOT_FOUND:
                error.userMessage = 'The requested resource was not found.';
                break;

            case HTTP_STATUS.CONFLICT:
                error.userMessage = response.data?.error || 'This email is already on the waitlist.';
                break;

            case HTTP_STATUS.TOO_MANY_REQUESTS: {
                const retryAfter = response.headers[RATE_LIMIT_HEADERS.RETRY_AFTER];
                error.userMessage = retryAfter
                    ? `Too many requests. Please try again in ${retryAfter} seconds.`
                    : 'Too many requests. Please try again later.';
                error.retryAfter = retryAfter ? parseInt(retryAfter, 10) : null;
                break;
            }

            case HTTP_STATUS.INTERNAL_SERVER_ERROR:
            case HTTP_STATUS.BAD_GATEWAY:
            case HTTP_STATUS.SERVICE_UNAVAILABLE:
            case HTTP_STATUS.GATEWAY_TIMEOUT:
                error.userMessage = 'Server error. Please try again later.';
                break;

            default:
                error.userMessage = response.data?.error || 'Something went wrong. Please try again.';
        }

        // Attach status code for easy access
        error.statusCode = response.status;

    } else if (request) {
        // Request was made but no response received (network error)
        error.userMessage = 'Network error. Please check your internet connection and try again.';
        error.isNetworkError = true;
        console.error('[API Network Error]', message);

    } else {
        // Something happened in setting up the request
        error.userMessage = 'An unexpected error occurred. Please try again.';
        console.error('[API Error]', message);
    }

    return Promise.reject(error);
};

/**
 * Setup Interceptors
 * 
 * Attaches request and response interceptors to the axios instance.
 * Call this function once during application initialization.
 */
export function setupInterceptors() {
    // Request interceptors
    axiosInstance.interceptors.request.use(
        requestInterceptor,
        requestErrorInterceptor
    );

    // Response interceptors
    axiosInstance.interceptors.response.use(
        responseInterceptor,
        responseErrorInterceptor
    );
}

/**
 * Eject Interceptors
 * 
 * Removes all interceptors from the axios instance.
 * Useful for cleanup in tests or when reconfiguring.
 */
export function ejectInterceptors() {
    axiosInstance.interceptors.request.clear();
    axiosInstance.interceptors.response.clear();
}

export { requestInterceptor, responseInterceptor, responseErrorInterceptor };
export default axiosInstance;
