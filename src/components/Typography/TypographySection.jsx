import React from 'react'
import { Typography } from '@material-ui/core/'
import PropTypes from 'prop-types'

function TypographySection({ text, component, variant }) {
  return (
    <Typography component={component} variant={variant}>
      {text}
    </Typography>
  )
}

TypographySection.propTypes = {
  text: PropTypes.string,
  component: PropTypes.string,
  variant: PropTypes.string,
}

export default TypographySection
