import express from 'express';
import { TripController } from '../controllers/tripController.js';
import { validateTripData } from '../middleware/validation.js';

const router = express.Router();

// Create a new trip
router.post('/', validateTripData, TripController.createTrip);

// Get trip by ID
router.get('/:tripId', TripController.getTripById);

// Get trips by user email
router.get('/user/:userEmail', TripController.getUserTrips);

// Update trip
router.put('/:tripId', TripController.updateTrip);

// Delete trip
router.delete('/:tripId', TripController.deleteTrip);

export default router;
