import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import {
  Button,
  CssBaseline,
  FormControlLabel,
  Checkbox,
  Grid,
  Container,
} from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons'
import signInStyle from './signIn.style'
// Components
import AvatarSection from '../../components/Avatar/AvatarSection'
import TypographySection from '../../components/Typography/TypographySection'
import InputField from '../../components/InputField/InputField'
import FormWrapper from '../../components/FormWrapper/FormWrapper'

function SignIn() {
  const signInClasses = signInStyle()

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={signInClasses.paper}>
        <AvatarSection
          classNames={classNames(signInClasses.avatar)}
          icon={<LockOutlined />}
        />
        <TypographySection text={'Sign in'} component={'h1'} variant={'h5'} />

        <FormWrapper classnames={signInClasses.form} noValidate>
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={signInClasses.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/sign-up" className={signInClasses.link}>
                Don&apos;t have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </FormWrapper>
      </div>
    </Container>
  )
}

export default SignIn
