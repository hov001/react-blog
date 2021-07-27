import React from 'react'
import PropsTypes from 'prop-types'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import alertStyle from './alert.style'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

class CustomizedSnackbars extends React.Component {
  constructor(props) {
    super(props)

    this.handleClose = this.handleClose.bind(this)
  }

  handleClose(event, reason) {
    const { closingFunc } = this.props

    if (reason === 'clickaway') {
      return
    }

    closingFunc()
  }

  render() {
    const { isOpen, message, alreadyUse } = this.props

    return (
      <Snackbar
        open={isOpen}
        autoHideDuration={6000}
        onClose={this.handleClose}
      >
        <Alert
          onClose={this.handleClose}
          severity={alreadyUse ? 'error' : 'success'}
        >
          {message}
        </Alert>
      </Snackbar>
    )
  }
}

CustomizedSnackbars.propTypes = {
  closingFunc: PropsTypes.func,
  isOpen: PropsTypes.bool,
  message: PropsTypes.string,
  alreadyUse: PropsTypes.bool,
}

export default (props) => {
  const classes = alertStyle()
  return <CustomizedSnackbars classes={classes} {...props} />
}
