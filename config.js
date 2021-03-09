import * as firebase from 'firebase'
require('@firebase/firestore')


var firebaseConfig = {
  apiKey: "AIzaSyDFK5xPwyicvp5DcXQzC9lExgKTz5eLQXo",
  authDomain: "wilytestapp71.firebaseapp.com",
  databaseURL:"https://wilytestapp71.firebaseio.com",
 //databaseURL: "https://wilytestapp71/firestore/data~2Ftransactions~2FJhjUzPk3xwAc5UWUGmxt",
  projectId: "wilytestapp71",
  storageBucket: "wilytestapp71.appspot.com",
  messagingSenderId: "873155724801",
  appId: "1:873155724801:web:53a4a5e4d50337509ba200"
};
 

if(!firebase.apps.length){ 
  firebase.initializeApp(firebaseConfig);
 }

  export default firebase.firestore();
