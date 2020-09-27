import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBp56PrXqTo3nGSmPIK4BQn3NLnW7ZZNRk",
  authDomain: "bartersystem-c263f.firebaseapp.com",
  databaseURL: "https://bartersystem-c263f.firebaseio.com",
  projectId: "bartersystem-c263f",
  storageBucket: "bartersystem-c263f.appspot.com",
  messagingSenderId: "31558771772",
  appId: "1:31558771772:web:6842f3f542ec9077abcf39"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
