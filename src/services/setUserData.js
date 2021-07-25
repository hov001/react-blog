// Firebase config
import firebase from 'firebase/app'
import 'firebase/database'

function setUserData(userId, firstName, lastName, email, password) {
  firebase
    .database()
    .ref('users/' + userId)
    .set({
      firstName,
      lastName,
      email,
      password,
    })
}

export default setUserData
