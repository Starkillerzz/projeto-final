import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase-storage'

const firebaseConfig = {
    apiKey: "AIzaSyBnWgFuLr_VZLAGSI6Xxju12Qjxgx1c8S4",
    authDomain: "recicle-5ed1c.firebaseapp.com",
    projectId: "recicle-5ed1c",
    storageBucket: "recicle-5ed1c.appspot.com",
    messagingSenderId: "881991970543",
    appId: "1:881991970543:web:e9c0ffabdd99c5587bf51a",
    measurementId: "G-4JBSVT6B0B"
  };

  firebase.initializeApp(firebaseConfig)
  
  export default firebase