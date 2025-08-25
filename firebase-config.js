// Firebase Configuration
// Replace with your actual Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyASiFSwx9XWnwqRu07YVCmvJ8Txg-t_eLY",
    authDomain: "cochin-aquatics-manageme-bf543.firebaseapp.com",
    databaseURL: "https://cochin-aquatics-manageme-bf543-default-rtdb.firebaseio.com/",
    projectId: "cochin-aquatics-manageme-bf543",
    storageBucket: "cochin-aquatics-manageme-bf543.firebasestorage.app",
    messagingSenderId: "625465354366",
    appId: "1:625465354366:web:4985c0c7e5daf4405f102f",
    measurementId: "G-WYTZ6G2XN0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get Firebase services
const auth = firebase.auth();
const database = firebase.database();

console.log('🔥 Firebase initialized successfully!');


