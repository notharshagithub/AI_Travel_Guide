import { db } from '../config/firebase.js';
import { collection, doc, addDoc, getDoc, updateDoc, query, where, getDocs } from 'firebase/firestore';

export class User {
  constructor(data) {
    this.id = data.id || null;
    this.email = data.email || '';
    this.name = data.name || '';
    this.picture = data.picture || '';
    this.provider = data.provider || 'google';
    this.createdAt = data.createdAt || new Date();
    this.lastLogin = data.lastLogin || new Date();
    this.tripCount = data.tripCount || 0;
  }

  // Create or update user
  static async createOrUpdate(userData) {
    try {
      const usersRef = collection(db, 'Users');
      const q = query(usersRef, where('email', '==', userData.email));
      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.empty) {
        // Create new user
        const docRef = await addDoc(usersRef, {
          ...userData,
          createdAt: new Date(),
          lastLogin: new Date(),
          tripCount: 0
        });
        
        return {
          id: docRef.id,
          ...userData,
          createdAt: new Date(),
          lastLogin: new Date(),
          tripCount: 0
        };
      } else {
        // Update existing user
        const userDoc = querySnapshot.docs[0];
        const userRef = doc(db, 'Users', userDoc.id);
        await updateDoc(userRef, {
          ...userData,
          lastLogin: new Date()
        });
        
        return {
          id: userDoc.id,
          ...userDoc.data(),
          ...userData,
          lastLogin: new Date()
        };
      }
    } catch (error) {
      throw new Error(`Failed to create/update user: ${error.message}`);
    }
  }

  // Get user by email
  static async getByEmail(email) {
    try {
      const usersRef = collection(db, 'Users');
      const q = query(usersRef, where('email', '==', email));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        return {
          id: userDoc.id,
          ...userDoc.data()
        };
      } else {
        throw new Error('User not found');
      }
    } catch (error) {
      throw new Error(`Failed to get user: ${error.message}`);
    }
  }

  // Update user trip count
  static async incrementTripCount(userEmail) {
    try {
      const user = await this.getByEmail(userEmail);
      const userRef = doc(db, 'Users', user.id);
      await updateDoc(userRef, {
        tripCount: user.tripCount + 1,
        updatedAt: new Date()
      });
      
      return { success: true };
    } catch (error) {
      throw new Error(`Failed to update trip count: ${error.message}`);
    }
  }

  // Validate user data
  static validateUserData(data) {
    const requiredFields = ['email', 'name'];
    const missingFields = requiredFields.filter(field => !data[field]);
    
    if (missingFields.length > 0) {
      throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      throw new Error('Invalid email format');
    }
    
    return true;
  }
}
