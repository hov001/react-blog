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
// Icons
import { LockOutlined } from '@material-ui/icons/'
// Components
import AvatarSection from '../../components/Avatar/AvatarSection'
import TypographySection from '../../components/Typography/TypographySection'
import InputField from '../../components/InputField/InputField'
// Material custom style
import signInStyle from '../../helpers/materialStyles/signIn.style'

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

        <form className={signInClasses.form} noValidate>
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
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default SignIn
