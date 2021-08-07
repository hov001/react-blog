import React from 'react'
import { useParams } from 'react-router-dom'
import PropsTypes from 'prop-types'
import getPostData from '../../services/getPostData'
import { CircularProgress, Container } from '@material-ui/core'

class SinglePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      post: {},
    }
  }

  componentDidMount() {
    const { id } = this.props
    getPostData(id).then((response) => {
      return this.setState({ isLoaded: true, post: response })
    })
  }

  render() {
    const { isLoaded, post } = this.state
    return (
      <Container component="main" maxWidth="lg">
        <div>
          {isLoaded ? (
            <div>
              <h1>{post.postTitle}</h1>
              <p>{post.postText}</p>
              <span>{post.date}</span>
            </div>
          ) : (
            <CircularProgress />
          )}
        </div>
      </Container>
    )
  }
}

SinglePage.propTypes = {
  id: PropsTypes.string,
}

export default () => {
  const { id } = useParams()

  return <SinglePage id={id} />
}
