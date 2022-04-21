import React, {useEffect} from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { useUserContext } from '../context/user_context';
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const {registerUser, user} = useUserContext()

  let navigate = useNavigate()

  const validate = Yup.object({
    firstName: Yup.string()
      .max(10, 'Must be 10 characters or less')
      .required('First name is required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 4 charaters')
      .required('Please enter your password'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })

  useEffect(() => {
    if(user){
      navigate('/')
    }
  }, [user])

  return (
    <Formik
      initialValues={{
        firstName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        const email = values.email
        const password = values.password
        const fName = values.firstName
        registerUser(email, password, fName)
      }} 
    >
      {formik => (
        <Container>
          <Form className="form">
            <TextField className="test" label="First Name" name="firstName" type="text"/>
            <TextField label="Email" name="email" type="email"/>
            <TextField label="password" name="password" type="password"/>
            <TextField label="Confirm Password" name="confirmPassword" type="password" />
            <button className="btn" type="submit">
              Sign Up
            </button>
          </Form>
        </Container>
      )}
    </Formik>
  )
}

const Container = styled.div `
.form {
  border: 1px solid gray;
  text-align: left; 
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 450px; 
  border: 0;
}

`

export default SignUp