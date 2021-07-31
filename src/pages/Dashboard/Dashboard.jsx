import React from 'react'
import PropsTypes from 'prop-types'
import DashboardForm from './Dashboard.formik'
import { Container } from '@material-ui/core'
import signInStyle from '../SignIn/signIn.style'
import CustomizedSnackbars from '../../components/Alert/Alert'
import setPostData from '../../services/setPostData'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasResponse: false,
      alreadyUse: false,
      useMessage: '',
    }
    this.handleRequest = this.handleRequest.bind(this)
    this.closeResponse = this.closeResponse.bind(this)
  }

  handleRequest(values) {
    setPostData(values)
      .then(() => {
        this.setState({
          alreadyUse: false,
          useMessage: 'You added new post.',
          hasResponse: true,
        })
      })
      .catch((error) => {
        this.setState({
          alreadyUse: true,
          useMessage: error.message,
          hasResponse: true,
        })
      })
  }

  closeResponse() {
    this.setState({ hasResponse: false })
  }

  render() {
    const { classes, uid } = this.props
    const { hasResponse, alreadyUse, useMessage } = this.state

    return (
      <Container component="main" maxWidth="sm">
        <div className={classes.paper}>
          <DashboardForm handleRequest={this.handleRequest} uid={uid} />
          <CustomizedSnackbars
            isOpen={hasResponse}
            closingFunc={this.closeResponse}
            message={useMessage}
            alreadyUse={alreadyUse}
          />
        </div>
      </Container>
    )
  }
}

Dashboard.propTypes = {
  classes: PropsTypes.object,
  uid: PropsTypes.string,
}

export default ({ uid }) => {
  const classes = signInStyle()

  return <Dashboard classes={classes} uid={uid} />
}
