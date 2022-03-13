import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyALZRdy5_E16LA8eZpZiJe6kAHRTPAKSDo",
  authDomain: "r-chat-19793.firebaseapp.com",
  databaseURL: "https://r-chat-19793-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "r-chat-19793",
  storageBucket: "r-chat-19793.appspot.com",
  messagingSenderId: "289257369837",
  appId: "1:289257369837:web:f5ad10741f6ae5c2f61ce4"
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();