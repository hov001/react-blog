// Firebase config
import firebaseConfig from '../constants/firebase.config'
import firebase from 'firebase/app'
import 'firebase/auth'
import setUserData from './setUserData'
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

function signUpWithEmailPassword({ firstName, lastName, email, password }) {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      setUserData(response.user.uid, firstName, lastName, email, password)
    })
}

export default signUpWithEmailPassword
