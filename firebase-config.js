// Firebase Configuration
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyANdxaKgAC95Xjzl8kge-g_wLI27PSGydc",
    authDomain: "cochin-aquatics-management.firebaseapp.com",
    databaseURL: "https://cochin-aquatics-management-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "cochin-aquatics-management",
    storageBucket: "cochin-aquatics-management.firebasestorage.app",
    messagingSenderId: "983104061446",
    appId: "1:983104061446:web:1b09c0f25efd35b827c387",
    measurementId: "G-F249ZP4S0F"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get Firebase services
const auth = firebase.auth();
const database = firebase.database();

console.log('🔥 Firebase initialized successfully!');