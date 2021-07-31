import firebase from 'firebase/app'
import 'firebase/database'

function setPostData({ userId, postId, postTitle, postText }) {
  console.log(userId, postId, postTitle, postText)
  return firebase.database().ref(`posts/${userId}/${postId}`).set({
    postTitle,
    postText,
  })
}

export default setPostData
