import firebase from 'firebase/app'
import 'firebase/database'

function setPostData({ userId, postId, postTitle, postText, date }) {
  return firebase.database().ref(`posts/${postId}`).set({
    userId,
    postTitle,
    postText,
    date,
  })
}

export default setPostData
