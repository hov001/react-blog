// Firebase config
import firebase from 'firebase/app'
import 'firebase/database'

function setUserData(userId) {
  return firebase
    .database()
    .ref()
    .child('users')
    .child(userId)
    .get()
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val()
      } else {
        return 'No data available'
      }
    })
    .catch((error) => {
      return error
    })
}

export default setUserData
