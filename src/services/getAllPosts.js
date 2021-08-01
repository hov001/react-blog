// Firebase config
import firebase from 'firebase/app'
import 'firebase/database'

function getAllPosts() {
  return firebase
    .database()
    .ref()
    .child('posts')
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

export default getAllPosts
