import React from 'react'
// Prop types
import PropsTypes from 'prop-types'
// Class names
import classNames from 'classnames'
// Material UI
import { CssBaseline, Container, Grid, Link } from '@material-ui/core'
// Material Icons
import { LockOutlined } from '@material-ui/icons'
// Material custom style
import signInStyle from '../../helpers/materialStyles/signIn.style'
// Components
import AvatarSection from '../../components/Avatar/AvatarSection'
import TypographySection from '../../components/Typography/TypographySection'
import signUpWithEmailPassword from '../../services/signUpWithEmailPass'
import CustomizedSnackbars from '../../components/Alert/Alert'
// Sign up form
import SignUpForm from './SignUp.formik'

class SignUp extends React.Component {
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

  handleRequest(vals) {
    signUpWithEmailPassword(vals)
      .then(() => {
        this.setState({
          alreadyUse: false,
          useMessage: 'You have successfully registered.',
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
    const { classes } = this.props
    const { hasResponse, alreadyUse, useMessage } = this.state
    const signUpClasses = classes

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={signUpClasses.paper}>
          <AvatarSection
            classNames={classNames(signUpClasses.avatar)}
            icon={<LockOutlined />}
          />
          <TypographySection text={'Sign up'} component={'h1'} variant={'h5'} />
          <SignUpForm handleRequest={this.handleRequest} />
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                {'Already have an account? Sign in'}
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

SignUp.propTypes = {
  classes: PropsTypes.object,
}

export default () => {
  const classes = signInStyle()
  return <SignUp classes={classes} />
}
