import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase.init";

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)


  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }

  const signOutUser = () => {
    setLoading(true)
    return signOut(auth)
  }

  // onAuthStateChanged(auth, (currentUser) =>{
  //   if(currentUser){
  //       console.log('Has Current user',currentUser)
  //   }
  //   else{
  //       console.log('Current user')
  //   }
  // })

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('Current user inside useEffect on auth state chaange', currentUser)
      setUser(currentUser);
      setLoading(false)
    })
    return () => {
      unSubscribe();
    }
  }, [])

  const userInfo = {
    user,
    loading,
    createUser,
    loginUser,
    signOutUser
  };

  return (
    <AuthContext value={userInfo}>
      {children}
    </AuthContext>
  )
};

export default AuthProvider;
