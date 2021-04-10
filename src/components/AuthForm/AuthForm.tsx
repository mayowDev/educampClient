import React, {Fragment} from 'react'
import { Grid, Paper, Button, Typography } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import validationSchema from '../../utils/formValidation'

const AuthForm = ({signin}) => {
    const paperStyle = { padding: '40px 20px', width: 250, margin: '20px auto' }
    const btnStyle = { marginTop: 10 }
    const initialValues = {
        name: '',
        email: '',
        phoneNumber: '',
        password: ''
    }
    
    const onSubmit = (values, props) => {
        // hand over this data to service api
        alert(JSON.stringify(values))
        props.resetForm()
    }
    return (
        <Fragment>
            {/* if it sing  use sign in ui markup , if not then its sign up ui markup*/}
            {signin&&(
                <Grid>
                <Paper elevation={5} style={paperStyle}>
                    <Grid alignItems='center'>
                        <Typography variant='h6'>Register Here</Typography>
                        <Typography variant='caption'>Fill the form to create an account</Typography>
                    </Grid>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {(props) => (
                            <Form>

                                <Field as={TextField} name='name' label='Name' fullWidth
                                    error={props.errors.name && props.touched.name}
                                    helperText={<ErrorMessage name='name' />} required />
                                <Field as={TextField} name='email' label='Email' fullWidth
                                    error={props.errors.email && props.touched.email}
                                    helperText={<ErrorMessage name='email' />} required />

                                <Field as={TextField} name="phoneNumber" label='Phone Number' fullWidth
                                    error={props.errors.phoneNumber && props.touched.phoneNumber}
                                    helperText={<ErrorMessage name='phoneNumber' />} required />

                                <Field as={TextField} name='password' label='Password' type='password' fullWidth
                                    error={props.errors.password && props.touched.password}
                                    helperText={<ErrorMessage name='password' />} required />

                                <Button type='submit' style={btnStyle} variant='contained'color='primary'>Register</Button>
                            </Form>
                        )}
                    </Formik>
                </Paper>
                </Grid>
            )}

        </Fragment>
        
    )
    
}

export default AuthForm;