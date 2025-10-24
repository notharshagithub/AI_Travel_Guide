import { initializeApp, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import serviceAccount from './serviceAccountKey.json' assert { type: 'json' };

let db, auth;

export const initializeFirebase = () => {
  try {
    // Check if Firebase is already initialized
    if (getApps().length === 0) {
      const app = initializeApp({
        credential: serviceAccount,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET
      });
      
      db = getFirestore(app);
      auth = getAuth(app);
      
      console.log('✅ Firebase Admin initialized successfully');
    } else {
      db = getFirestore();
      auth = getAuth();
      console.log('✅ Firebase Admin already initialized');
    }
  } catch (error) {
    console.error('❌ Firebase initialization failed:', error);
    throw error;
  }
};

export { db, auth };
