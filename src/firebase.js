// import firebase from './firebase'; 
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyAvxW90mXzFRU8ehpY4KhM6pa2AIw4eG5c",
  authDomain: "netflix-clone-51bfe.firebaseapp.com",
  projectId: "netflix-clone-51bfe",
  storageBucket: "netflix-clone-51bfe.appspot.com",
  messagingSenderId: "423929070050",
  appId: "1:423929070050:web:ec29589807a72034a8b9bb"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export default auth;