import { makeStyles } from '@material-ui/core/styles'

const navbarStyle = makeStyles((theme) => ({
  signIn: {
    display: 'flex',
    alignItems: 'center',
  },
  signInBtn: {
    color: '#fff',
    textDecoration: 'none',
  },
}))

export default navbarStyle
