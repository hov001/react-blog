import { makeStyles } from '@material-ui/core/styles'

const navbarStyle = makeStyles(() => ({
  signIn: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  signInBtn: {
    color: '#fff',
    textDecoration: 'none',
  },
}))

export default navbarStyle
