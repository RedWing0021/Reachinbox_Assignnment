import axios from 'axios';

const API_BASE_URL = 'https://hiring.reachinbox.xyz/api/v1';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('bearerToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const resetOnebox = async () => {
  try {
    const response = await apiClient.get('/onebox/reset');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const replyEmail = async (threadId, emailData) => {
  try {
    const response = await apiClient.post(`/onebox/reply/${threadId}`, emailData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const googleLogin = async (redirectTo) => {
  try {
    const response = await apiClient.get(`/auth/google-login?redirect_to=${encodeURIComponent(redirectTo)}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
