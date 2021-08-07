// Firebase config
import firebase from 'firebase/app'
import 'firebase/database'

function getPostData(postId) {
  return firebase
    .database()
    .ref()
    .child('posts')
    .child(postId)
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

export default getPostData
