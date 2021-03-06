// Firebase config
import firebase from 'firebase/app'
import 'firebase/database'

function getUserData(userId) {
  return firebase
    .database()
    .ref()
    .child('users')
    .child(userId)
    .get()
    .then((snapshot) => {
      if (snapshot.exists()) {
        return { userId, ...snapshot.val() }
      } else {
        return 'No data available'
      }
    })
    .catch((error) => {
      return error
    })
}

export default getUserData
