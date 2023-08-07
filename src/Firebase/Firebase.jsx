import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { browserSessionPersistence, getAuth, setPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACbhVaU7arw_728nhM5dl4p_ftbfoN_7E",
  authDomain: "buybusy-4487a.firebaseapp.com",
  projectId: "buybusy-4487a",
  storageBucket: "buybusy-4487a.appspot.com",
  messagingSenderId: "702219839024",
  appId: "1:702219839024:web:b0818fc90b296a40476ff5"
  // apiKey: "AIzaSyDk7VzekqDelDgKYt6l271hZ59FUUoye0E",
  // authDomain: "card-react-app.firebaseapp.com",
  // projectId: "card-react-app",
  // storageBucket: "card-react-app.appspot.com",
  // messagingSenderId: "586496702947",
  // appId: "1:586496702947:web:b6027e3a17ba64294648d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Enable session persistence
setPersistence(auth, browserSessionPersistence);