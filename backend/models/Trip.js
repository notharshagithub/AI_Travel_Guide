import { db } from '../config/firebase.js';
import { collection, doc, addDoc, getDoc, updateDoc, deleteDoc, query, where, orderBy, getDocs } from 'firebase/firestore';

export class Trip {
  constructor(data) {
    this.id = data.id || null;
    this.userSelection = data.userSelection || {};
    this.tripData = data.tripData || {};
    this.userEmail = data.userEmail || '';
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();
  }

  // Create a new trip
  static async create(tripData) {
    try {
      const docRef = await addDoc(collection(db, 'AITrips'), {
        ...tripData,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      
      return {
        id: docRef.id,
        ...tripData,
        createdAt: new Date(),
        updatedAt: new Date()
      };
    } catch (error) {
      throw new Error(`Failed to create trip: ${error.message}`);
    }
  }

  // Get trip by ID
  static async getById(tripId) {
    try {
      const tripRef = doc(db, 'AITrips', tripId);
      const tripSnap = await getDoc(tripRef);
      
      if (tripSnap.exists()) {
        return {
          id: tripSnap.id,
          ...tripSnap.data()
        };
      } else {
        throw new Error('Trip not found');
      }
    } catch (error) {
      throw new Error(`Failed to get trip: ${error.message}`);
    }
  }

  // Update trip
  static async update(tripId, updateData) {
    try {
      const tripRef = doc(db, 'AITrips', tripId);
      await updateDoc(tripRef, {
        ...updateData,
        updatedAt: new Date()
      });
      
      return await this.getById(tripId);
    } catch (error) {
      throw new Error(`Failed to update trip: ${error.message}`);
    }
  }

  // Delete trip
  static async delete(tripId) {
    try {
      const tripRef = doc(db, 'AITrips', tripId);
      await deleteDoc(tripRef);
      return { success: true, message: 'Trip deleted successfully' };
    } catch (error) {
      throw new Error(`Failed to delete trip: ${error.message}`);
    }
  }

  // Get trips by user email
  static async getByUserEmail(userEmail) {
    try {
      const tripsRef = collection(db, 'AITrips');
      const q = query(
        tripsRef,
        where('userEmail', '==', userEmail),
        orderBy('createdAt', 'desc')
      );
      
      const querySnapshot = await getDocs(q);
      const trips = [];
      
      querySnapshot.forEach((doc) => {
        trips.push({
          id: doc.id,
          ...doc.data()
        });
      });
      
      return trips;
    } catch (error) {
      throw new Error(`Failed to get user trips: ${error.message}`);
    }
  }

  // Validate trip data
  static validateTripData(data) {
    const requiredFields = ['userSelection', 'tripData', 'userEmail'];
    const missingFields = requiredFields.filter(field => !data[field]);
    
    if (missingFields.length > 0) {
      throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
    }
    
    return true;
  }
}
