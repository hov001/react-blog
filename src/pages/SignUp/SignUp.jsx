import React from 'react'
// Prop types
import PropsTypes from 'prop-types'
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
import signUpWithEmailPassword from '../../services/signUpWithEmailPass'
import CustomizedSnackbars from '../../components/Alert/Alert'

class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasResponse: false,
      alreadyUse: false,
      useMessage: '',
    }
    this.signUpWithEmailPassword = signUpWithEmailPassword.bind(this)
    this.handleRequest = this.handleRequest.bind(this)
    this.closeResponse = this.closeResponse.bind(this)
  }

  handleRequest(e) {
    e.preventDefault()
    console.log(e.target)
    this.signUpWithEmailPassword()
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
          <FormWrapper
            classnames={signUpClasses.form}
            onSubmit={this.handleRequest}
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
