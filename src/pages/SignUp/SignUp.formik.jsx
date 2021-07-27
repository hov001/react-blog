// Render Prop
import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import PropsTypes from 'prop-types'
import { Button, Grid } from '@material-ui/core'
import InputField from '../../components/InputField/InputField'
import FormWrapper from '../../components/FormWrapper/FormWrapper'
import signInStyle from '../SignIn/signIn.style'

function SignUpForm({ classes, formik }) {
  const signUpClasses = classes

  return (
    <FormWrapper
      onSubmit={formik.handleSubmit}
      classnames={signUpClasses.form}
      noValidate
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <InputField
            variant={'outlined'}
            margin={'normal'}
            required
            fullWidth
            type={'text'}
            id={'firstName'}
            label={'First Name'}
            name={'firstName'}
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            variant={'outlined'}
            margin={'normal'}
            required
            fullWidth
            type={'text'}
            id={'lastName'}
            label={'Last Name'}
            name={'lastName'}
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
        </Grid>
        <Grid item xs={12}>
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
        </Grid>
        <Grid item xs={12}>
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
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={signUpClasses.submit}
      >
        Sign Up
      </Button>
    </FormWrapper>
  )
}

SignUpForm.propTypes = {
  classes: PropsTypes.object,
  formik: PropsTypes.object,
}

export default ({ handleRequest }) => {
  const classes = signInStyle()
  const validationSchema = yup.object({
    firstName: yup
      .string('Enter your first name')
      .min(3, 'Password should be of minimum 3 characters length')
      .required('First name is required'),
    lastName: yup
      .string('Enter your last name')
      .min(3, 'Password should be of minimum 3 characters length')
      .required('Last name is required'),
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
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      handleRequest(values)
    },
  })

  return <SignUpForm classes={classes} formik={formik} />
}
