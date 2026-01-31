import axios from 'axios';
import { API_BASE_URL, API_TIMEOUT } from '../config/api.config';

/**
 * Centralized Axios Instance
 * 
 * Configured with base URL, timeout, and default headers.
 * Import this instance for all API calls to ensure consistent
 * configuration and interceptor behavior.
 * 
 * @example
 * import axiosInstance from './api/axiosConfig';
 * const response = await axiosInstance.get('/api/waitlist');
 */

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: API_TIMEOUT,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    // Enable credentials for CORS if needed
    withCredentials: false,
});

export default axiosInstance;
