import { initializeApp } from '@firebase/app';
import { getAuth } from '@firebase/auth';
import { getFirestore } from '@firebase/firestore';
import { getStorage } from '@firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDKpuqKfYjBIq5Fc4ctOkOrpI1dBaj1ExA",
    authDomain: "khaz-daily-moments.firebaseapp.com",
    projectId: "khaz-daily-moments",
    storageBucket: "khaz-daily-moments.appspot.com",
    messagingSenderId: "815188218374",
    appId: "1:815188218374:web:b83ea747a5853746aa2987"
  }; 

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  export const firestore = getFirestore(app);
  export const storage = getStorage(app);
