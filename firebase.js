// JavaScript 
// src/firebase.js 

import { initializeApp } from "firebase/app" 
import { getFirestore } from "firebase/firestore"

const firebaseConfig = { 
	apiKey: "AIzaSyD1Td1lqKtxxNqySLNAzdAjciZY3zMViPQ", 
	authDomain: "todo-app-3e5e8.firebaseapp.com", 
	projectId: "todo-app-3e5e8", 
	storageBucket: "todo-app-3e5e8.appspot.com",
	messagingSenderId: "232057026285", 	
    appId: "1:232057026285:web:cb5b65f06f9cf02c68bee4" 
} 


const app = initializeApp(firebaseConfig) 
const db = getFirestore(app) 

export {db}
