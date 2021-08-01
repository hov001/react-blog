import React from 'react'
import PropsTypes from 'prop-types'
import PostCard from '../../components/Card/Card'
import { CircularProgress, Container } from '@material-ui/core'
import homeStyle from './home.style'
import getAllPosts from '../../services/getAllPosts'
import Main from '../../components/Main/Main'

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
            posts.map((item) => {
              return (
                <PostCard
                  styleClass={homeClasses.item}
                  key={item[0]}
                  postTitle={item[1].postTitle}
                  postText={item[1].postText}
                  author={item[1].userId}
                  date={item[1].date}
                />
              )
            })
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
