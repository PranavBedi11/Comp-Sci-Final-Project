import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB6iLkTd6XqFZvHtfSujtNf04n5Yru7Y0w",
    authDomain: "login-employeer.firebaseapp.com",
    projectId: "login-employeer",
    storageBucket: "login-employeer.appspot.com",
    messagingSenderId: "6917789410",
    appId: "1:6917789410:web:9eb1eb2e5dc400fac230bb"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);