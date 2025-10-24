import { Trip } from '../models/Trip.js';
import { User } from '../models/User.js';
import { generateTripWithAI } from '../services/aiService.js';

export class TripController {
  // Create a new trip
  static async createTrip(req, res) {
    try {
      const { userSelection, userEmail } = req.body;
      
      // Validate input
      if (!userSelection || !userEmail) {
        return res.status(400).json({
          success: false,
          message: 'Missing required fields: userSelection and userEmail'
        });
      }

      // Generate AI trip data
      const aiTripData = await generateTripWithAI(userSelection);
      
      // Create trip data
      const tripData = {
        userSelection,
        tripData: aiTripData,
        userEmail,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      // Save trip to database
      const trip = await Trip.create(tripData);
      
      // Update user trip count
      await User.incrementTripCount(userEmail);
      
      res.status(201).json({
        success: true,
        message: 'Trip created successfully',
        data: trip
      });
    } catch (error) {
      console.error('Create trip error:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to create trip',
        error: error.message
      });
    }
  }

  // Get trip by ID
  static async getTripById(req, res) {
    try {
      const { tripId } = req.params;
      
      if (!tripId) {
        return res.status(400).json({
          success: false,
          message: 'Trip ID is required'
        });
      }

      const trip = await Trip.getById(tripId);
      
      res.status(200).json({
        success: true,
        data: trip
      });
    } catch (error) {
      console.error('Get trip error:', error);
      res.status(404).json({
        success: false,
        message: 'Trip not found',
        error: error.message
      });
    }
  }

  // Get trips by user email
  static async getUserTrips(req, res) {
    try {
      const { userEmail } = req.params;
      
      if (!userEmail) {
        return res.status(400).json({
          success: false,
          message: 'User email is required'
        });
      }

      const trips = await Trip.getByUserEmail(userEmail);
      
      res.status(200).json({
        success: true,
        data: trips,
        count: trips.length
      });
    } catch (error) {
      console.error('Get user trips error:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to get user trips',
        error: error.message
      });
    }
  }

  // Update trip
  static async updateTrip(req, res) {
    try {
      const { tripId } = req.params;
      const updateData = req.body;
      
      if (!tripId) {
        return res.status(400).json({
          success: false,
          message: 'Trip ID is required'
        });
      }

      const updatedTrip = await Trip.update(tripId, updateData);
      
      res.status(200).json({
        success: true,
        message: 'Trip updated successfully',
        data: updatedTrip
      });
    } catch (error) {
      console.error('Update trip error:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to update trip',
        error: error.message
      });
    }
  }

  // Delete trip
  static async deleteTrip(req, res) {
    try {
      const { tripId } = req.params;
      
      if (!tripId) {
        return res.status(400).json({
          success: false,
          message: 'Trip ID is required'
        });
      }

      await Trip.delete(tripId);
      
      res.status(200).json({
        success: true,
        message: 'Trip deleted successfully'
      });
    } catch (error) {
      console.error('Delete trip error:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to delete trip',
        error: error.message
      });
    }
  }
}
