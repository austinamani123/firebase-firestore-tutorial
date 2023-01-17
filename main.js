import './style.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDQcxo7VfeVspun-YO0rX8Y6HJVz1yuy_E',
	authDomain: 'fir-firestore-tutorial-c3bf0.firebaseapp.com',
	projectId: 'fir-firestore-tutorial-c3bf0',
	storageBucket: 'fir-firestore-tutorial-c3bf0.appspot.com',
	messagingSenderId: '219613098745',
	appId: '1:219613098745:web:5ea0a48c43c0cb93106828',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = firebase.firestore();
db.settings({ timestampInSnapshots: true });
