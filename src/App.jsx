import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Grid,
  ButtonGroup,
} from '@material-ui/core'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

function App() {
  const classes = useStyles()

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Grid container xs={3}>
            <Grid item>
              <Typography variant="h6" className={classes.title}>
                Dashboard
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <ButtonGroup
                variant="text"
                color="inherit"
                aria-label="text inherit button group"
              >
                <Button color="inherit">Add blog</Button>
              </ButtonGroup>
            </Grid>
          </Grid>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <SignIn />
      {/*<SignUp />*/}
    </div>
  )
}

export default App
