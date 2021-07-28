// Firebase config
import firebase from 'firebase/app'
import 'firebase/auth'

function signInWithEmailPassword({ email, password }) {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}

export default signInWithEmailPassword
