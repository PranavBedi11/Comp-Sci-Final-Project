import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
/**
 * The firebaseConfig object contains the configuration settings for the Firebase
 * project used in the Job Finder website. It includes information such as the API
 * key, project ID, authDomain,storageBucket, messagingSenderId and app Id.
 *
 * @type {Object}
 */
const firebaseConfig = {
    apiKey: "AIzaSyAmcQLTi2A7v0eKEkMacv6TwEQekdwCCSI",
    authDomain: "auth-development-a8731.firebaseapp.com",
    projectId: "auth-development-a8731",
    storageBucket: "auth-development-a8731.appspot.com",
    messagingSenderId: "573316426008",
    appId: "1:573316426008:web:33894a1a1200727a83166d" 
};



const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
