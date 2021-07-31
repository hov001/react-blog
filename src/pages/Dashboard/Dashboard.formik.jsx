// Render Prop
import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { v4 as uuidv4 } from 'uuid'
import PropsTypes from 'prop-types'
import { Button, Grid } from '@material-ui/core'
import InputField from '../../components/InputField/InputField'
import FormWrapper from '../../components/FormWrapper/FormWrapper'
import signInStyle from '../SignIn/signIn.style'

function DashboardForm({ classes, formik }) {
  return (
    <FormWrapper
      onSubmit={formik.handleSubmit}
      classnames={classes.form}
      noValidate
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <InputField
            variant={'outlined'}
            margin={'normal'}
            required
            fullWidth
            type={'text'}
            id={'postTitle'}
            label={'Post title'}
            name={'postTitle'}
            value={formik.values.postTitle}
            onChange={formik.handleChange}
            error={formik.touched.postTitle && Boolean(formik.errors.postTitle)}
            helperText={formik.touched.postTitle && formik.errors.postTitle}
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            variant={'outlined'}
            margin={'normal'}
            required
            fullWidth
            multiline
            minRows={8}
            maxRows={16}
            type={'text'}
            id={'postText'}
            label={'Post text'}
            name={'postText'}
            value={formik.values.postText}
            onChange={formik.handleChange}
            error={formik.touched.postText && Boolean(formik.errors.postText)}
            helperText={formik.touched.postText && formik.errors.postText}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Add post
      </Button>
    </FormWrapper>
  )
}

DashboardForm.propTypes = {
  classes: PropsTypes.object,
  formik: PropsTypes.object,
}

export default ({ handleRequest, uid }) => {
  const classes = signInStyle()
  const validationSchema = yup.object({
    postTitle: yup
      .string('Enter post title')
      .required('Post title is required'),
    postText: yup.string('Enter post text').required('Post text is required'),
  })

  const formik = useFormik({
    initialValues: {
      postTitle: '',
      postText: '',
    },
    validationSchema,
    onSubmit: (values) => {
      const postId = uuidv4()
      console.log(values, postId)
      handleRequest({ userId: uid, postId, ...values })
    },
  })

  return <DashboardForm classes={classes} formik={formik} />
}
