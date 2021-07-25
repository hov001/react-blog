// Firebase config
import firebaseConfig from '../constants/firebase.config'
import firebase from 'firebase/app'
import 'firebase/auth'
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

function signUpWithEmailPassword() {
  const email = 'test@example.com'
  const password = 'hunter2'
  return firebase.auth().createUserWithEmailAndPassword(email, password)
}

export default signUpWithEmailPassword
