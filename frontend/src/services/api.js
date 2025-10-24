import axios from 'axios';

// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

// Trip API
export const tripAPI = {
  // Create a new trip
  createTrip: async (tripData) => {
    const response = await api.post('/trips', tripData);
    return response.data;
  },

  // Get trip by ID
  getTripById: async (tripId) => {
    const response = await api.get(`/trips/${tripId}`);
    return response.data;
  },

  // Get user trips
  getUserTrips: async (userEmail) => {
    const response = await api.get(`/trips/user/${userEmail}`);
    return response.data;
  },

  // Update trip
  updateTrip: async (tripId, updateData) => {
    const response = await api.put(`/trips/${tripId}`, updateData);
    return response.data;
  },

  // Delete trip
  deleteTrip: async (tripId) => {
    const response = await api.delete(`/trips/${tripId}`);
    return response.data;
  },
};

// User API
export const userAPI = {
  // Create or update user
  createOrUpdateUser: async (userData) => {
    const response = await api.post('/users', userData);
    return response.data;
  },

  // Get user by email
  getUserByEmail: async (email) => {
    const response = await api.get(`/users/${email}`);
    return response.data;
  },

  // Get user stats
  getUserStats: async (email) => {
    const response = await api.get(`/users/${email}/stats`);
    return response.data;
  },
};

// AI API
export const aiAPI = {
  // Generate trip with AI
  generateTrip: async (userSelection) => {
    const response = await api.post('/ai/generate-trip', { userSelection });
    return response.data;
  },

  // Health check
  healthCheck: async () => {
    const response = await api.get('/ai/health');
    return response.data;
  },
};

// Health check for main API
export const healthCheck = async () => {
  const response = await api.get('/health');
  return response.data;
};

export default api;
