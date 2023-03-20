import * as yup from 'yup'

 export  const signupValidationSchema = yup.object().shape({
  UserName: yup
    .string()
    .required('Name  is Required'),
 Web: yup
    .string()
   ,
   
  Phone: yup
    .string()
    .required('completing the field  phone is Requerid'),
})
