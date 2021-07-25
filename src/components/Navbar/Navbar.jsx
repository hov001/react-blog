import React from 'react'
import {
  AppBar,
  Breadcrumbs,
  Button,
  ButtonGroup,
  Grid,
  Toolbar,
  Link,
} from '@material-ui/core'
import TypographySection from '../Typography/TypographySection'
import navbarStyle from '../../helpers/materialStyles/navbar.style'

function Navbar() {
  const classes = navbarStyle()

  return (
    <AppBar position="static">
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
              <Button color="inherit">Add blog</Button>
            </ButtonGroup>
          </Grid>
          <Grid item className={classes.signIn}>
            <Breadcrumbs aria-label="breadcrumb" className={classes.signInBtn}>
              <Link color="inherit" href="/">
                Sign In
              </Link>
              <Link color="inherit" href="/">
                Sign Up
              </Link>
            </Breadcrumbs>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
