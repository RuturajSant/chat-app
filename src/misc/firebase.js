import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyDw7PEieMp5mPAWFVqqcWxcPjoSFHRDuMY",
  authDomain: "chat-app-web-bc6ce.firebaseapp.com",
  databaseURL: "https://chat-app-web-bc6ce-default-rtdb.firebaseio.com",
  projectId: "chat-app-web-bc6ce",
  storageBucket: "chat-app-web-bc6ce.appspot.com",
  messagingSenderId: "736404376567",
  appId: "1:736404376567:web:ff6c0030e484992d7bbcf2"
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();