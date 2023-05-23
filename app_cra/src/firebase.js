import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAZ05ZTyqCJFhy2Gs0VRjqmR9Qihlk-XfM",
    authDomain: "proyecto-rjs-campagnaro.firebaseapp.com",
    projectId: "proyecto-rjs-campagnaro",
    storageBucket: "proyecto-rjs-campagnaro.appspot.com",
    messagingSenderId: "714029826626",
    appId: "1:714029826626:web:f64548fe66b9150bac23db"
};


const app = initializeApp(firebaseConfig); 

export const db = getFirestore(app) 