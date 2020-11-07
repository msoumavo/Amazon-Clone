import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBXazyp0ceEXZk6p97G480tLrllQn6Rr5Q",
    authDomain: "challenge-8e55f.firebaseapp.com",
    databaseURL: "https://challenge-8e55f.firebaseio.com",
    projectId: "challenge-8e55f",
    storageBucket: "challenge-8e55f.appspot.com",
    messagingSenderId: "128156036866",
    appId: "1:128156036866:web:5c0117b742cbb26489dc1b",
    measurementId: "G-6LZEG8FSLQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};