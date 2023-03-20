import * as yup from 'yup'

 export  const signupValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email valite")
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
    names: yup
    .string()
    .required('completing the field  name is Requerid'),
    surname: yup
    .string()
    .required('completing the field is Requerid'),
    repetPassword:yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('completing the field confirm password Requerid'),
  
})
