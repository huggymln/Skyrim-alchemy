import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAIleTqH-E6CUs8RD32ZH3-l4TFWDVY6lo",
  authDomain: "alchemy-recipe.firebaseapp.com",
  projectId: "alchemy-recipe",
  storageBucket: "alchemy-recipe.appspot.com",
  messagingSenderId: "511060865138",
  appId: "1:511060865138:web:9a3d31cba5a8cd9e3212eb",
  measurementId: "G-97SYGS2XQ0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(db);