import React from 'react'
import PropsTypes from 'prop-types'

function FormWrapper({ classnames, noValidate, children }) {
  return (
    <form className={classnames} noValidate={noValidate}>
      {children}
    </form>
  )
}

FormWrapper.propTypes = {
  classnames: PropsTypes.string,
  noValidate: PropsTypes.bool,
  children: PropsTypes.array,
}

export default FormWrapper
