import React, {useState} from 'react'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import styled from 'styled-components'
import { useUserContext } from '../context/user_context'
import Loading from '../components/Loading'

const LoginPage = () => {
  const {loading, setError} = useUserContext()
  const [signIn, setSignIn] = useState(true)
  const togglePage = () => {
    setSignIn(!signIn)
    setError(false)
  }

  if(loading){
    return <Loading/>
  }
  
  return (
    <Container>
      <div className="login-wrapper">
        <div className="wrapper">
          <h4 className="title">{signIn ? 'Sign In' : 'Sign Up'}</h4>
               {signIn ? <SignIn /> : <SignUp/>}
               <div className="line">
           <p>Or</p>
               </div>
               {!signIn ?
               <p>Already have an account? <span onClick={togglePage}>Log In</span></p> :
               <p>Don't have an account? <span onClick={togglePage}>Sign Up</span></p>}
        </div>
      </div>
      <div className="the-footer">
        <h5>&copy; {new Date().getFullYear()} <span className="footer-span">Protein Store</span> All rights reserved</h5>
      </div>
    </Container>
  )
}

const Container = styled.div `
  margin-top: 10em;
  
  .login-wrapper {
    min-height: calc(100vh - 198px);
  }
  
  .wrapper{
    width: 95%;
    max-width: 450px; 
    margin: 0 auto;
    margin-bottom: 3em;
    text-align: center;
    border: 2px solid gray;
    padding: 1.5em;
    border-radius: 5px;
}


  span {
    cursor: pointer;
    color: var(--clr-cyan-dark);
    text-decoration: underline;
    font-weight: 700;  
  }

  .line {
    height: 2px;
    background-color: gray;
    display: flex;
    justify-content: center;
    margin: 1.5em 0;
    width: 100%;
    position: relative;
    p{
      position: absolute;
      background-color: var(--clr-cyan-v-light);
      padding: 0 0.3em;
      top: -22px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .title {
    margin-bottom: 1em;
  }

  span:hover{
    color: var(--clr-cyan-regular);
  }
  p{
    margin-top: 1em;
  }
`

export default LoginPage