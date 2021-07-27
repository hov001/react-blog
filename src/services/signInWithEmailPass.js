// Firebase config
import firebase from 'firebase/app'
import 'firebase/auth'
import getUserData from './getUserData'

function signInWithEmailPassword({ email, password }) {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      return getUserData(response.user.uid, email, password)
    })
}

export default signInWithEmailPassword
