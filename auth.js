// auth.js
import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDHriVfvlM57b44b9yjV3kMobSr-PQgyEg",
  authDomain: "login-and-signup-32423.firebaseapp.com",
  projectId: "login-and-signup-32423",
  storageBucket: "login-and-signup-32423.firebasestorage.app",
  messagingSenderId: "1007668179378",
  appId: "1:1007668179378:web:09d6bb68f00c76da87b4ab",
  measurementId: "G-VK6G3X5B48"
};

// Initialize Firebase
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const auth = getAuth(app);

// 👉 Login Function
export const loginUser = async (email, password) => {
  try {
    await setPersistence(auth, browserLocalPersistence);
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    console.log("Logged in as:", userCred.user.email);
  } catch (error) {
    console.error("Login error:", error.message);
  }
};



// 👉 Logout Function (optional)
export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.error("Logout error:", error.message);
  }
};

// 👉 Session Tracker (optional)
export const trackUser = (callback) => {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};

export const signUpUser = async (email, password) => {
  try {
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Signed up as:", userCred.user.email);
  } catch (error) {
    console.error("Signup error:", error.message);
    throw error; // 👈 This lets your page react to errors properly
  }
};

console.log("✅ Firebase Auth connected:", !!auth);
export const firebaseApp = app;

  

