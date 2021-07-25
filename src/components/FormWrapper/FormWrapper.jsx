import React from 'react'
import PropsTypes from 'prop-types'

function FormWrapper({ classnames, noValidate, onSubmit, children }) {
  return (
    <form className={classnames} noValidate={noValidate} onSubmit={onSubmit}>
      {children}
    </form>
  )
}

FormWrapper.propTypes = {
  classnames: PropsTypes.string,
  noValidate: PropsTypes.bool,
  onSubmit: PropsTypes.func,
  children: PropsTypes.array,
}

export default FormWrapper
