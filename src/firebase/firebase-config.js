import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAYEhFOgUvV7ZImMlw6kMNUEgcntnMf22M",
    authDomain: "a2odevmanager.firebaseapp.com",
    databaseURL: "https://a2odevmanager.firebaseio.com",
    projectId: "a2odevmanager",
    storageBucket: "a2odevmanager.appspot.com",
    messagingSenderId: "150856541076",
    appId: "1:150856541076:web:416862b79ab48598cca581"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
};