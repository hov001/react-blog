import React from 'react'
import PropsTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { AppBar, Button, ButtonGroup, Grid, Toolbar } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import navbarStyle from './navbar.style'
import theme from '../../constants/theme.style'
import TypographySection from '../Typography/TypographySection'

function Navbar({ isAuth, uid }) {
  const classes = navbarStyle()

  return (
    <ThemeProvider theme={theme}>
      <AppBar color={'primary'} position="static">
        <Toolbar>
          <Grid container justifyContent="space-between">
            <Grid item xs={3}>
              <Link className={classes.signInBtn} to="/">
                <TypographySection
                  text={'Blogging'}
                  component={'h6'}
                  variant={'h6'}
                />
              </Link>
            </Grid>
            {uid === null ? (
              <>
                <Grid item xs={5} className={classes.signIn}>
                  <Button color="inherit">
                    <Link className={classes.signInBtn} to="/sign-in">
                      Sign In
                    </Link>
                  </Button>
                  <Button color="inherit">
                    <Link className={classes.signInBtn} to="/sign-up">
                      Sign Up
                    </Link>
                  </Button>
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={4}>
                  <ButtonGroup
                    variant="text"
                    color="inherit"
                    aria-label="text inherit button group"
                  >
                    <Button color="inherit">
                      <Link className={classes.signInBtn} to="/dashboard">
                        Add blog
                      </Link>
                    </Button>
                  </ButtonGroup>
                </Grid>
                <Grid item xs={5} className={classes.signIn}>
                  <TypographySection
                    text={`Welcome, ${uid}`}
                    component={'p'}
                    variant={'subtitle2'}
                  />
                  <Button
                    color="inherit"
                    className={classes.signInBtn}
                    onClick={() => isAuth()}
                  >
                    Logout
                  </Button>
                </Grid>
              </>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

Navbar.propTypes = {
  isAuth: PropsTypes.func,
  uid: PropsTypes.string,
}

export default Navbar
