import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'
import { getAuth } from 'firebase/auth'
import { getMessaging } from 'firebase/messaging';

// Initialize Firebase 
const firebaseConfig = {
    apiKey: "AIzaSyC6oRrPSOHklnK15U1yjQUje_MJrq0rtqk",
    authDomain: "protask-8d984.firebaseapp.com",
    projectId: "protask-8d984",
    storageBucket: "protask-8d984.appspot.com",
    messagingSenderId: "594968334482",
    appId: "1:594968334482:web:13afe8b3c4c41078d3164b",
    measurementId: "G-Y4KKQP8YXF"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const messaging = getMessaging(app);

export { auth, db, messaging };