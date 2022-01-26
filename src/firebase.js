
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyBiYTo2l_iiIigIdS0Tjg-tyV5U1-MGFtQ",

  authDomain: "linkedin-clone-f194b.firebaseapp.com",

  projectId: "linkedin-clone-f194b",

  storageBucket: "linkedin-clone-f194b.appspot.com",

  messagingSenderId: "272353546023",

  appId: "1:272353546023:web:a84f58e7f74e1435452302"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export{db,auth};