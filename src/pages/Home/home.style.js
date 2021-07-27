import { makeStyles } from '@material-ui/core/styles'

const homeStyle = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  item: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
}))

export default homeStyle
