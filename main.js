// #1 SETTING UP FIRESTORE

// Import the functions you need from the SDK's you need
import { initializeApp } from 'firebase/app';
import './style.css';
import { getDocs, getFirestore, collection } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBDk6kgzyvVZBc4QAqjMvmbxF-r8SBu1YQ',
	authDomain: 'fir-firestore-tutorial-8f5d5.firebaseapp.com',
	projectId: 'fir-firestore-tutorial-8f5d5',
	storageBucket: 'fir-firestore-tutorial-8f5d5.appspot.com',
	messagingSenderId: '29874342677',
	appId: '1:29874342677:web:e99939bc71673dfe33f71c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
const db = getFirestore(app);

//Collection Refference
const colRef = collection(db, 'Cafes');

// #2 GETTING DOCUMENTS

//Html Dom Elements
const cafeList = document.querySelector('#cafe-list');

//Create element and render cafe
function renderCafe(doc) {
	let li = document.createElement('li');
	let name = document.createElement('span');
	let city = document.createElement('span');

	li.setAttribute('data-id', doc.id);
	name.textContent = doc.data().Name;
	city.textContent = doc.data().City;

	li.appendChild(name);
	li.appendChild(city);

	cafeList.appendChild(li);
}

//Get all documents from the cafes collection and display them
//const snapshot = await getDocs(collection(db, 'Cafes'));

//console.log(snapshot.docs);

//Cycle through the documents and dislay their data
// snapshot.forEach((doc) => {
// 	console.log(doc.data());
// });

//Render
//snapshot.forEach((doc) => {
//renderCafe(doc);
//});

//Render using an IIFE function
(async function getDocuments() {
	const snapshot = await getDocs(collection(db, 'Cafes'));

	snapshot.forEach((doc) => {
		renderCafe(doc);
	});
})();
