import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import PropsTypes from 'prop-types'
import classNames from 'classnames'
import { CssBaseline, Grid, Container } from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons'
import signInStyle from './signIn.style'
import AvatarSection from '../../components/Avatar/AvatarSection'
import TypographySection from '../../components/Typography/TypographySection'
import signInWithEmailPassword from '../../services/signInWithEmailPass'
import CustomizedSnackbars from '../../components/Alert/Alert'
import SignInForm from './SignIn.formik'

class SignIn extends React.Component {
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
    const { isAuth, history } = this.props

    signInWithEmailPassword(values)
      .then((response) => {
        isAuth(response.user.uid)
        history()
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
    const { classes } = this.props
    const { hasResponse, alreadyUse, useMessage } = this.state
    const signInClasses = classes

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={signInClasses.paper}>
          <AvatarSection
            classNames={classNames(signInClasses.avatar)}
            icon={<LockOutlined />}
          />
          <TypographySection text={'Sign in'} component={'h1'} variant={'h5'} />
          <SignInForm handleRequest={this.handleRequest} />
          <Grid container>
            <Grid item>
              <Link to="/sign-up" className={signInClasses.link}>
                Don&apos;t have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
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

SignIn.propTypes = {
  classes: PropsTypes.object,
  isAuth: PropsTypes.func,
  history: PropsTypes.func,
}

export default ({ isAuth, uid }) => {
  const classes = signInStyle()
  const history = useHistory()
  return (
    <SignIn
      classes={classes}
      isAuth={isAuth}
      history={() => history.push('/')}
      uid={uid === null ? 'null' : uid}
    />
  )
}
