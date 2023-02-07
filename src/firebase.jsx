import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//2.1 Inscription Ajout de l'authentification Login

const firebaseConfig = {
    apiKey: "AIzaSyAgffUG09RfuaFBrN82vRqOQ927ENGjPa0",
    authDomain: "netflix-clone-b093c.firebaseapp.com",
    projectId: "netflix-clone-b093c",
    storageBucket: "netflix-clone-b093c.appspot.com",
    messagingSenderId: "838982452480",
    appId: "1:838982452480:web:2cdda027073c11bc6d9fe5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;