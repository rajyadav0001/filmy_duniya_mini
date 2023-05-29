 
import { initializeApp } from "firebase/app";

// ****
import { getFirestore, collection } from 'firebase/firestore'
// ****

 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDukhPlrtM0-NJSTgE6BDT3LFzpB-5eyE8",
  authDomain: "filmyduniya-1609e.firebaseapp.com",
  projectId: "filmyduniya-1609e",
  storageBucket: "filmyduniya-1609e.appspot.com",
  messagingSenderId: "298479919771",
  appId: "1:298479919771:web:6ebf0fe25e44216fbc1c3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// ****
export const db = getFirestore(app);
export const moviesRef = collection(db, 'movies');
export const reviewsRef = collection(db, 'reviews');
export const usersRef = collection(db, 'users');
export default app;
//****