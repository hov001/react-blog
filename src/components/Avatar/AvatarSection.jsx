import React from 'react'
import { Avatar } from '@material-ui/core'
import PropTypes from 'prop-types'

function AvatarSection({ classNames, icon }) {
  return <Avatar className={classNames}>{icon}</Avatar>
}

AvatarSection.propTypes = {
  classNames: PropTypes.string,
  icon: PropTypes.object,
}

export default AvatarSection
