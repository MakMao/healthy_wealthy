import React, { useContext, useEffect, useState } from "react";
import { getAuth, sendPasswordResetEmail, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {app} from '../firebase'

const UserContext = React.createContext()

export const UserProvider = ({children}) => {

  const [user, setUser] = useState(null)
  const [error, setError] = useState(false)
  const [msg, setMsg] = useState(false)
  const [loading, setLoading] = useState(false)

  const signIn = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      setError(false)
    })
    .catch(() => {
      setError(true)
      setLoading(false)
      console.log(error);
    })
  }
  const logOut = () => {
    const auth = getAuth();
      signOut(auth)
      setUser(null)
  }


  const registerUser = (email, password, fName) => {
    setLoading(true)
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      updateProfile(auth?.currentUser, {
        displayName: fName,
      }).then(() => {
          setUser(fName)
          setLoading(false)
        })
        .catch((error) => {
          setError(true)
        })
      })
  }

  const resetPassword = (email) => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
  }

  const resetPsdMsg = () => {
    setMsg(true)
    setTimeout(() => {
      setMsg(false)
    }, 2500)
  }

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
      const person = user?.reloadUserInfo.displayName 
      setUser(person)
    } else {
      setUser(null)
    }});
  }, [])


const value = {
  user,
  signIn,
  error,
  registerUser,
  setUser,
  setError,
  resetPassword,
  msg,
  setMsg,
  resetPsdMsg,
  loading,
  setLoading,
  logOut
}

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext)
}