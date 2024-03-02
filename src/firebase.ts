import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDKpuqKfYjBIq5Fc4ctOkOrpI1dBaj1ExA",
    authDomain: "khaz-daily-moments.firebaseapp.com",
    projectId: "khaz-daily-moments",
    storageBucket: "khaz-daily-moments.appspot.com",
    messagingSenderId: "815188218374",
    appId: "1:815188218374:web:b83ea747a5853746aa2987"
  }; 

  const app = firebase.initializeApp(firebaseConfig);

  export const auth = app.auth();
  export const firestore = app.firestore();
