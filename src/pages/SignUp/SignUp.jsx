import React from 'react'
// Firebase config
import firebaseConfig from '../../constants/firebase.config'
import firebase from 'firebase/app'
import 'firebase/auth'
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// Class names
import classNames from 'classnames'
// Material UI
import {
  Button,
  CssBaseline,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Container,
} from '@material-ui/core'
// Material Icons
import { LockOutlined } from '@material-ui/icons'
// Material custom style
import signInStyle from '../../helpers/materialStyles/signIn.style'
// Components
import AvatarSection from '../../components/Avatar/AvatarSection'
import TypographySection from '../../components/Typography/TypographySection'
import InputField from '../../components/InputField/InputField'
import FormWrapper from '../../components/FormWrapper/FormWrapper'

class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.signUpWithEmailPassword = this.signUpWithEmailPassword.bind(this)
  }

  signUpWithEmailPassword(e) {
    e.preventDefault()
    // console.log(e)
    const email = 'test@example.com'
    const password = 'hunter2'
    // [START auth_signup_password]
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(userCredential.user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        // ..
        console.log('errorCode', errorCode)
        console.log('errorMessage', errorMessage)
      })
    // [END auth_signup_password]
  }

  render() {
    const signUpClasses = this.props.classes

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={signUpClasses.paper}>
          <AvatarSection
            classNames={classNames(signUpClasses.avatar)}
            icon={<LockOutlined />}
          />
          <TypographySection text={'Sign up'} component={'h1'} variant={'h5'} />

          <FormWrapper
            classnames={signUpClasses.form}
            onSubmit={this.signUpWithEmailPassword}
            noValidate
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <InputField
                  variant={'outlined'}
                  margin={'normal'}
                  required
                  fullWidth
                  type={'text'}
                  id={'firstName'}
                  label={'First Name'}
                  name={'firstName'}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputField
                  variant={'outlined'}
                  margin={'normal'}
                  required
                  fullWidth
                  type={'text'}
                  id={'lastName'}
                  label={'Last Name'}
                  name={'lastName'}
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  variant={'outlined'}
                  margin={'normal'}
                  required
                  fullWidth
                  type={'email'}
                  id={'email'}
                  label={'Email Address'}
                  name={'email'}
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  variant={'outlined'}
                  margin={'normal'}
                  required
                  fullWidth
                  type={'password'}
                  id={'password'}
                  label={'Password'}
                  name={'password'}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={signUpClasses.submit}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {'Already have an account? Sign in'}
                </Link>
              </Grid>
            </Grid>
          </FormWrapper>
        </div>
      </Container>
    )
  }
}

export default () => {
  const classes = signInStyle()
  return <SignUp classes={classes} />
}
