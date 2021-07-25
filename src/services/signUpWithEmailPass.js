// Firebase config
import firebaseConfig from '../constants/firebase.config'
import firebase from 'firebase/app'
import 'firebase/auth'
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

function signUpWithEmailPassword({ firsName, lastName, email, password }) {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
}

export default signUpWithEmailPassword
