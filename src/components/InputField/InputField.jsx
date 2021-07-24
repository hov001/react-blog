import React from 'react'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'

function InputField({
  variant,
  margin,
  required,
  fullWidth,
  type,
  id,
  label,
  name,
}) {
  return (
    <TextField
      variant={variant}
      margin={margin}
      required={required}
      fullWidth={fullWidth}
      type={type}
      id={id}
      label={label}
      name={name}
    />
  )
}

InputField.propTypes = {
  variant: PropTypes.string,
  margin: PropTypes.string,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  type: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
}

export default InputField
