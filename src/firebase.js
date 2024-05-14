// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvToaxHZYLqE3SRsQ1FQ8mbkxENmPF8w4",
  authDomain: "my-react-app-b0db2.firebaseapp.com",
  projectId: "my-react-app-b0db2",
  storageBucket: "my-react-app-b0db2.appspot.com",
  messagingSenderId: "1031215427309",
  appId: "1:1031215427309:web:9575cb55b3c486841c66e4",
  measurementId: "G-7XL70N9SWD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const storage = getStorage(app);

const provider = new GoogleAuthProvider(auth);
export { auth, provider, storage };

export  default getFirestore(app);
