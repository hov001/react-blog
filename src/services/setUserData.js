// Firebase config
import firebase from 'firebase/app'
import 'firebase/database'

function setUserData(userId, firstName, lastName) {
  firebase
    .database()
    .ref('users/' + userId)
    .set({
      firstName,
      lastName,
    })
}

export default setUserData
