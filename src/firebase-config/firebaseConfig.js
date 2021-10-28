import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

let firebaseConfig = {
    apiKey: "AIzaSyAjvV1fWmqzyQU6sUp8gd1-DwSaCtVKMZQ",
    authDomain: "plantilla-firebase-crud.firebaseapp.com",
    projectId: "plantilla-firebase-crud",
    storageBucket: "plantilla-firebase-crud.appspot.com",
    messagingSenderId: "491279397817",
    appId: "1:491279397817:web:1d8f413cbf647d5d47fc68"
  };

//inicializa firebase
firebase.initializeApp(firebaseConfig);


//referencia de la base de datos 
const db = firebase.firestore();


//permite autenticacion con google 
const google = new firebase.auth.GoogleAuthProvider()

// accedeindo al storage
const storageFire = firebase.storage()
 
//se exporta 
export {firebase, db, google, storageFire}
