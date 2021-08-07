import React from 'react'
import PropsTypes from 'prop-types'
import PostCard from '../../components/Card/Card'
import { CircularProgress, Container } from '@material-ui/core'
import homeStyle from './home.style'
import getAllPosts from '../../services/getAllPosts'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      posts: [],
    }
  }

  componentDidMount() {
    getAllPosts().then((response) => {
      const newData = Object.entries(response)

      return this.setState({ isLoaded: true, posts: newData })
    })
  }

  render() {
    const { homeClasses } = this.props
    const { isLoaded, posts } = this.state

    return (
      <Container component="main" maxWidth="lg">
        <div className={homeClasses.paper}>
          {isLoaded ? (
            posts.map(([postId, postInfos]) => (
              <PostCard
                styleClass={homeClasses.item}
                key={postId}
                postId={postId}
                postTitle={postInfos.postTitle}
                postText={postInfos.postText}
                author={postInfos.userId}
                date={postInfos.date}
              />
            ))
          ) : (
            <CircularProgress />
          )}
        </div>
      </Container>
    )
  }
}

Home.propTypes = {
  homeClasses: PropsTypes.object,
}

export default () => {
  const homeClasses = homeStyle()

  return <Home homeClasses={homeClasses} />
}
