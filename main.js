// #1 SETTING UP FIRESTORE

// Import the functions you need from the SDK's you need
import { initializeApp } from 'firebase/app';
import './style.css';
import {
	getDocs,
	getFirestore,
	collection,
	addDoc,
	deleteDoc,
	doc,
	query,
	where,
	orderBy,
} from 'firebase/firestore';

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
const form = document.querySelector('#add-cafe-form');

//Create element and render cafe
function renderCafe(doc) {
	let li = document.createElement('li');
	let name = document.createElement('span');
	let city = document.createElement('span');
	let cross = document.createElement('div');

	li.setAttribute('data-id', doc.id);
	name.textContent = doc.data().Name;
	city.textContent = doc.data().City;
	cross.textContent = 'x';

	li.appendChild(name);
	li.appendChild(city);
	li.appendChild(cross);

	cafeList.appendChild(li);

	//DELETING DATA

	//Adding an event listener for deleting documents
	cross.addEventListener('click', (e) => {
		e.stopPropagation();

		//Get document id
		let id = e.target.parentElement.getAttribute('data-id');

		//
		deleteDocument(id);
	});
}

// #5 QUERIES
//
// (async function getDocuments() {
// 	try {
// 		const cafeRef = collection(db, 'Cafes');
// 		//const snapshot = await getDocs(cafeRef);
// 		//const qry = await query(cafeRef, where('City', '==', 'Marioland'));
// 		//const snapshot = await getDocs(qry);

// 		snapshot.forEach((doc) => {
// 			renderCafe(doc);
// 		});

// 		console.log('Documents successfully retrieved...');
// 	} catch (err) {
// 		console.error('Error retrieving documents: ', err);
// 	}
// })();

// #6 ORDERING DATA
//
// (async function orderData() {
// 	try {
// 		const cafeRef = collection(db, 'Cafes');

// 		const qry = await query(cafeRef, where('City', '==', 'Marioland'), orderBy('Name'));
// 		const snapshot = await getDocs(qry);

// 		snapshot.forEach((doc) => {
// 			renderCafe(doc);
// 		});

// 		console.log('Documents successfully retrieved...');
// 	} catch (err) {
// 		console.error('Error retrieving documents: ', err);
// 	}
// })();

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
// (async function getDocuments() {
// 	const snapshot = await getDocs(collection(db, 'Cafes'));

// 	snapshot.forEach((doc) => {
// 		renderCafe(doc);
// 	});
// })();

// #3 SAVING DATA

// Adding a document
async function addDocument() {
	try {
		const docRef = await addDoc(collection(db, 'Cafes'), {
			Name: form.name.value,
			City: form.city.value,
		});

		console.log('Document written with ID', docRef.id);
	} catch (err) {
		console.error('Error adding document', err);
	}
}

//Adding an event listener for adding documents and preventing the default action (refreshing)

form.addEventListener('submit', (e) => {
	e.preventDefault();

	// Add data
	addDocument();

	// Clear form
	form.name.value = '';
	form.city.value = '';
});

// #4 DELETING DATA
//Deleting document from the cafes collection
async function deleteDocument(id) {
	await deleteDoc(doc(db, 'Cafes', id));
}
