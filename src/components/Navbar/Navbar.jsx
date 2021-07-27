import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Button, ButtonGroup, Grid, Toolbar } from '@material-ui/core'
import TypographySection from '../Typography/TypographySection'
import navbarStyle from './navbar.style'

function Navbar() {
  const classes = navbarStyle()

  return (
    <AppBar color={'secondary'} position="static">
      <Toolbar>
        <Grid container>
          <Grid item xs={3}>
            <TypographySection
              text={'Dashboard'}
              component={'h6'}
              variant={'h6'}
            />
          </Grid>
          <Grid item xs={7}>
            <ButtonGroup
              variant="text"
              color="inherit"
              aria-label="text inherit button group"
            >
              <Button color="inherit">
                <Link className={classes.signInBtn} to="/">
                  Add blog
                </Link>
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid item className={classes.signIn}>
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
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
