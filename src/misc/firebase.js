import firebase from 'firebase/app';

const config = {
    apiKey: "AIzaSyAVSc5vwG7ZClVm6jtIGeNtKpbO5d8vIlU",
    authDomain: "chat-web-app-a2cbf.firebaseapp.com",
    databaseURL: "https://chat-web-app-a2cbf-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chat-web-app-a2cbf",
    storageBucket: "chat-web-app-a2cbf.appspot.com",
    messagingSenderId: "873818400235",
    appId: "1:873818400235:web:daf74afafd25277dfb25ae"
  };

const app = firebase.initializeApp(config);
