import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBVqNvhVhV8czS41JM9Eq2aLZjzCvGMAcQ",
    authDomain: "clone-70d76.firebaseapp.com",
    databaseURL: "https://clone-70d76.firebaseio.com",
    projectId: "clone-70d76",
    storageBucket: "clone-70d76.appspot.com",
    messagingSenderId: "562862143554",
    appId: "1:562862143554:web:09d7e9ded4efeefde7d5db"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;