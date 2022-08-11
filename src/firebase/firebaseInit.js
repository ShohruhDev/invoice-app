import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBlOQEy6SnBBMa-V5BVRvKzZBkXlRoBzWU",
    authDomain: "vue-invoice-app-91f6c.firebaseapp.com",
    databaseURL: "https://vue-invoice-app-91f6c-default-rtdb.firebaseio.com",
    projectId: "vue-invoice-app-91f6c",
    storageBucket: "vue-invoice-app-91f6c.appspot.com",
    messagingSenderId: "790778555816",
    appId: "1:790778555816:web:53692086ce6cd3b8d1c19d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();