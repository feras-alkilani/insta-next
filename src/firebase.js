// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD70lih3dpeVdgGqEuPr1rcCZDmgoZrDYI",
  authDomain: "insta-next-2551b.firebaseapp.com",
  projectId: "insta-next-2551b",
  storageBucket: "insta-next-2551b.appspot.com",
  messagingSenderId: "1004528055367",
  appId: "1:1004528055367:web:440a120489f10005c7ad62"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

// Export both for use in your app
export { app, storage, db };
