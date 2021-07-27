import firebase from 'firebase/app'
import 'firebase/database'

function setPostData({ userId, postTitle, postText }) {
  console.log(userId, postTitle, postText)
  return firebase
    .database()
    .ref('posts/' + userId + '/' + 'ss')
    .set({
      postTitle,
      postText,
    })
}

export default setPostData
