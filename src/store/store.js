
import firebase from "firebase";
import "firebase/auth";

  var firebaseConfig = {
    apiKey: "AIzaSyBFt7MmjrhRpKo2T5yLqgPH1ZTeAQ-qy_E",
    authDomain: "yurulife-db.firebaseapp.com",
    databaseURL: "https://yurulife-db.firebaseio.com",
    projectId: "yurulife-db",
    storageBucket: "yurulife-db.appspot.com",
    messagingSenderId: "42764380340",
    appId: "1:42764380340:web:7b1baac028e7ce41ae8fe1",
    measurementId: "G-3LNS36TL5T"
  }
  
  firebase.initializeApp(firebaseConfig);

// Initialize Firebase
firebase.analytics();

export default firebase
