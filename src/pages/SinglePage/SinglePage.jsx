import React from 'react'
import { useParams } from 'react-router-dom'
import PropsTypes from 'prop-types'
import getPostData from '../../services/getPostData'
import { Button, CircularProgress, Container } from '@material-ui/core'
import { Delete, Edit } from '@material-ui/icons'

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
    const { uid } = this.props
    const { isLoaded, post } = this.state

    return (
      <Container component="main" maxWidth="lg">
        <div>
          {isLoaded ? (
            <div>
              {post.userId === uid && (
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<Edit />}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<Delete />}
                  >
                    Delete
                  </Button>
                </div>
              )}
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

export default ({ uid }) => {
  const { id } = useParams()

  return <SinglePage id={id} uid={uid} />
}
