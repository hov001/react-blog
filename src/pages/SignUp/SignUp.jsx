import React from 'react'
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
} from '@material-ui/core/'
// Material Icons
import { LockOutlined } from '@material-ui/icons/'
// Material custom style
import signInStyle from '../../helpers/materialStyles/signIn.style'
// Components
import AvatarSection from '../../components/Avatar/AvatarSection'
import TypographySection from '../../components/Typography/TypographySection'
import InputField from '../../components/InputField/InputField'
import FormWrapper from '../../components/FormWrapper/FormWrapper'

function SignUp() {
  const signUpClasses = signInStyle()

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={signUpClasses.paper}>
        <AvatarSection
          classNames={classNames(signUpClasses.avatar)}
          icon={<LockOutlined />}
        />
        <TypographySection text={'Sign up'} component={'h1'} variant={'h5'} />

        <FormWrapper classnames={signUpClasses.form} noValidate>
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
                control={<Checkbox value="allowExtraEmails" color="primary" />}
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

export default SignUp
