// Firebase initialization (compat SDK)
// Ensure this file is loaded after firebase-app-compat.js and before other app scripts

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANdxaKgAC95Xjzl8kge-g_wLI27PSGydc",
  authDomain: "cochin-aquatics-management.firebaseapp.com",
  databaseURL: "https://cochin-aquatics-management-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cochin-aquatics-management",
  storageBucket: "cochin-aquatics-management.firebasestorage.app",
  messagingSenderId: "983104061446",
  appId: "1:983104061446:web:1b09c0f25efd35b827c387"
};

// Initialize Firebase (compat API)
if (!firebase.apps || firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

// Optionally expose services
window.firebaseApp = firebase.app();
window.firebaseAuth = firebase.auth();
window.firebaseDb = firebase.database();

