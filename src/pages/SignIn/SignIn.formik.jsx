// Render Prop
import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import PropsTypes from 'prop-types'
import { Button, Checkbox, FormControlLabel } from '@material-ui/core'
import InputField from '../../components/InputField/InputField'
import FormWrapper from '../../components/FormWrapper/FormWrapper'
import signInStyle from './signIn.style'

function SignInForm({ classes, formik }) {
  const signInClasses = classes

  return (
    <FormWrapper
      onSubmit={formik.handleSubmit}
      classnames={signInClasses.form}
      noValidate
    >
      <InputField
        variant={'outlined'}
        margin={'normal'}
        required
        fullWidth
        type={'email'}
        id={'email'}
        label={'Email Address'}
        name={'email'}
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <InputField
        variant={'outlined'}
        margin={'normal'}
        required
        fullWidth
        type={'password'}
        id={'password'}
        label={'Password'}
        name={'password'}
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <FormControlLabel
        control={
          <Checkbox
            color="primary"
            name={'stayIn'}
            value={formik.values.stayIn}
            onChange={formik.handleChange}
          />
        }
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={signInClasses.submit}
      >
        Sign In
      </Button>
    </FormWrapper>
  )
}

SignInForm.propTypes = {
  classes: PropsTypes.object,
  formik: PropsTypes.object,
}

export default ({ handleRequest }) => {
  const classes = signInStyle()
  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      stayIn: false,
    },
    validationSchema,
    onSubmit: (values) => {
      handleRequest(values)
    },
  })

  return <SignInForm classes={classes} formik={formik} />
}
