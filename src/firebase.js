
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaLxqS7K7Ujfyso5G_UV-ZuWG-HNJvvDM",
    authDomain: "twitter-clone-45947.firebaseapp.com",
    projectId: "twitter-clone-45947",
    storageBucket: "twitter-clone-45947.appspot.com",
    messagingSenderId: "1051720746794",
    appId: "1:1051720746794:web:4f8ff5fd5eae9a71538053",
    measurementId: "G-ZG19EWZQXR"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db;