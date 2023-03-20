import * as yup from 'yup'

 export  const loginValidationSchema = yup.object().shape({
  username: yup
    .string()
    .email("Please enter valid email valite")
    
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})
