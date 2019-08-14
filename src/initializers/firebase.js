import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAW5wJgS2VwHafT9jm1TjMYX_52bVghxZY",
    authDomain: "albunes-7b2b3.firebaseapp.com",
    databaseURL: "https://albunes-7b2b3.firebaseio.com",
    projectId: "albunes-7b2b3",
    storageBucket: "gs://albunes-7b2b3.appspot.com",
    messagingSenderId: "39895454857",
    appId: "1:39895454857:web:8d617d41b5a4cfdf"
  }

  firebase.initializeApp(firebaseConfig)
  export default firebase