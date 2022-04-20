import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import { useUserContext } from '../context/user_context';
import styled from 'styled-components'
import { Link, useNavigate } from "react-router-dom";
import ReportIcon from '@mui/icons-material/Report';

const SignIn = () => {
  const {signIn, user, error, msg, setError, resetPassword, resetPsdMsg, setLoading} = useUserContext()

  const [hideIt, setHideIt] = useState(false)

  let navigate = useNavigate()

  useEffect(() => {
    if(user){
      navigate('/')
    }
  }, [user])

  const handleLogin = () => {
    setError(false)
    setHideIt(!hideIt)
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={values => {
        const email = values.email
        const password = values.password
        hideIt && resetPassword(email) 
        hideIt && resetPsdMsg()
        signIn(email, password)
      }}
    >
      {formik => (
        <Container>
          <Form className={`${hideIt ? 'hide form' : 'form'}`}>
            <TextField label="Email" name="email" type="email"/>
            <TextField label="password" name="password" type="password" />
            {error && (
            <div className="error-display">
              <ReportIcon className="icon"/>
              <p className="error-login">Invalid email adddress or password</p>
            </div>
            )}
            <button className="btn" type="submit">Sign in</button>
            <p onClick={handleLogin} className="login-btn">Forgot password?</p>
          </Form>
          <Form className={`${!hideIt ? 'hide form' : 'form'}`}>
            {msg && <p className="msg">Please check your email</p>}
            <TextField label="Email" name="email" type="email"/>
            <button className="btn" onClick={() => resetPassword()}>Reset Password</button>
            <p onClick={handleLogin} type="button" className="login-btn"> Back to login?</p>
          </Form>
        </Container>
      )}
    </Formik>
  )
}

const Container = styled.div `
  text-align: left;

  .form {
    display: flex;
    flex-direction: column;
  }

  .error-login {
    display: flex;
    border-radius: 5px;
    margin-top: 0.2em;
    color: red;
    align-items: center;
  }

  .icon {
    color: red;
  }

  .error-display {
    display: flex;
    border-radius: 5px;
    margin: -1.8em 0 2em 0;
    color: red;
    align-items: center;
    background-color: rgba(244, 40, 40, 0.3);
}

  .hide {
    display: none;
  }

  .login-btn {
    background-color: transparent;
    margin-top: 1.5em;
    border: none;
    width: fit-content;
    cursor: pointer;
  }

  .msg {
    text-align: center;
    border-radius: 5px;
    color: red;
    margin: -1em 0 1em 0;
    padding: 0.35em;
    background-color: rgba(244, 40, 40, 0.3);
  }
`

export default SignIn