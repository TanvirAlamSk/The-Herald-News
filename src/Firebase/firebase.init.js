// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBCRTmnDG3NH6qUJrzgKRwTPI8KhPXS9E0",
    authDomain: "the-herald-news-52c4a.firebaseapp.com",
    projectId: "the-herald-news-52c4a",
    storageBucket: "the-herald-news-52c4a.appspot.com",
    messagingSenderId: "155368562211",
    appId: "1:155368562211:web:efdfae4804a9e56af35b96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;