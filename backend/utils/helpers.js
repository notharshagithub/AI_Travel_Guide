// Utility functions for the backend

/**
 * Format API response
 * @param {boolean} success - Success status
 * @param {string} message - Response message
 * @param {any} data - Response data
 * @param {any} error - Error details
 * @returns {object} Formatted response
 */
export const formatResponse = (success, message, data = null, error = null) => {
  const response = {
    success,
    message,
    timestamp: new Date().toISOString()
  };

  if (data) response.data = data;
  if (error) response.error = error;

  return response;
};

/**
 * Generate unique ID
 * @returns {string} Unique identifier
 */
export const generateId = () => {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9);
};

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} Is valid email
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Sanitize string input
 * @param {string} input - Input to sanitize
 * @returns {string} Sanitized input
 */
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  return input.trim().replace(/[<>]/g, '');
};

/**
 * Calculate trip duration in days
 * @param {Date} startDate - Trip start date
 * @param {Date} endDate - Trip end date
 * @returns {number} Duration in days
 */
export const calculateTripDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end - start);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

/**
 * Format date for display
 * @param {Date} date - Date to format
 * @returns {string} Formatted date string
 */
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * Generate trip summary
 * @param {object} tripData - Trip data object
 * @returns {string} Trip summary
 */
export const generateTripSummary = (tripData) => {
  const { location, duration, budget, travelers } = tripData;
  return `${duration} trip to ${location} for ${travelers} with ${budget} budget`;
};

/**
 * Validate trip data structure
 * @param {object} tripData - Trip data to validate
 * @returns {boolean} Is valid trip data
 */
export const validateTripStructure = (tripData) => {
  const requiredFields = ['location', 'duration', 'budget', 'travelers'];
  return requiredFields.every(field => tripData[field]);
};

/**
 * Extract coordinates from location string
 * @param {string} location - Location string
 * @returns {object|null} Coordinates object or null
 */
export const extractCoordinates = (location) => {
  // This would typically use a geocoding service
  // For now, return null as placeholder
  return null;
};

/**
 * Calculate distance between two coordinates
 * @param {object} coord1 - First coordinate {lat, lng}
 * @param {object} coord2 - Second coordinate {lat, lng}
 * @returns {number} Distance in kilometers
 */
export const calculateDistance = (coord1, coord2) => {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (coord2.lat - coord1.lat) * Math.PI / 180;
  const dLng = (coord2.lng - coord1.lng) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(coord1.lat * Math.PI / 180) * Math.cos(coord2.lat * Math.PI / 180) *
    Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
};

/**
 * Log error with context
 * @param {Error} error - Error object
 * @param {string} context - Error context
 * @param {object} metadata - Additional metadata
 */
export const logError = (error, context, metadata = {}) => {
  console.error(`[${context}] Error:`, {
    message: error.message,
    stack: error.stack,
    metadata,
    timestamp: new Date().toISOString()
  });
};

/**
 * Retry function with exponential backoff
 * @param {Function} fn - Function to retry
 * @param {number} maxRetries - Maximum number of retries
 * @param {number} delay - Initial delay in milliseconds
 * @returns {Promise} Promise that resolves with function result
 */
export const retryWithBackoff = async (fn, maxRetries = 3, delay = 1000) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, i)));
    }
  }
};
