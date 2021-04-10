import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, "It's too short").required("Required"),
    email: Yup.string().email("Enter valid email").required("Required"),
    // phoneNumber: Yup.number().typeError("Enter valid Phone number").required("Required"),
    password: Yup.string().min(8, "Minimum characters should be 8").required('Required')
})

export default validationSchema