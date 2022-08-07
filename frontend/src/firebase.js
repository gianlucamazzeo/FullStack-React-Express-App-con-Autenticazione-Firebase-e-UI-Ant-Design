import firebase from "firebase/compat/app";
import "firebase/compat/auth";
//import { initializeApp } from "firebase/app";

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "yourApikeyFirebase",
   authDomain: "yourProjectId.firebaseapp.com",
   projectId: "yourProjectId",
   storageBucket: "yourProjectId.appspot.com",
   messagingSenderId: "0000000303030",
   appId: "1:38762632967:web:fddsdssdsdsdss"
 };

 firebase.initializeApp(firebaseConfig);
 // export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); 
