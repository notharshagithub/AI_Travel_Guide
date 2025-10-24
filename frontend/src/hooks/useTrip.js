import { useState, useEffect } from 'react';
import { tripAPI, aiAPI } from '../services/api';

export const useTrip = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Create trip with AI generation
  const createTrip = async (userSelection, userEmail) => {
    try {
      setLoading(true);
      setError(null);

      // Generate AI trip data
      const aiResponse = await aiAPI.generateTrip(userSelection);
      
      if (!aiResponse.success) {
        throw new Error(aiResponse.message || 'Failed to generate trip with AI');
      }

      // Create trip with generated data
      const tripData = {
        userSelection,
        tripData: aiResponse.data,
        userEmail,
      };

      const response = await tripAPI.createTrip(tripData);
      
      if (response.success) {
        return { success: true, data: response.data };
      } else {
        throw new Error(response.message || 'Failed to create trip');
      }
    } catch (error) {
      console.error('Create trip error:', error);
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Get trip by ID
  const getTripById = async (tripId) => {
    try {
      setLoading(true);
      setError(null);

      const response = await tripAPI.getTripById(tripId);
      
      if (response.success) {
        return { success: true, data: response.data };
      } else {
        throw new Error(response.message || 'Failed to get trip');
      }
    } catch (error) {
      console.error('Get trip error:', error);
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Get user trips
  const getUserTrips = async (userEmail) => {
    try {
      setLoading(true);
      setError(null);

      const response = await tripAPI.getUserTrips(userEmail);
      
      if (response.success) {
        return { success: true, data: response.data };
      } else {
        throw new Error(response.message || 'Failed to get user trips');
      }
    } catch (error) {
      console.error('Get user trips error:', error);
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Update trip
  const updateTrip = async (tripId, updateData) => {
    try {
      setLoading(true);
      setError(null);

      const response = await tripAPI.updateTrip(tripId, updateData);
      
      if (response.success) {
        return { success: true, data: response.data };
      } else {
        throw new Error(response.message || 'Failed to update trip');
      }
    } catch (error) {
      console.error('Update trip error:', error);
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Delete trip
  const deleteTrip = async (tripId) => {
    try {
      setLoading(true);
      setError(null);

      const response = await tripAPI.deleteTrip(tripId);
      
      if (response.success) {
        return { success: true };
      } else {
        throw new Error(response.message || 'Failed to delete trip');
      }
    } catch (error) {
      console.error('Delete trip error:', error);
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    createTrip,
    getTripById,
    getUserTrips,
    updateTrip,
    deleteTrip,
  };
};
