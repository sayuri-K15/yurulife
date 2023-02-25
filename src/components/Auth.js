// import React, {createContext, useEffect, useState, useCallback} from 'react';
// iimport firebase from "firebase/compat/app";";
// import { Redirect } from 'react-router-dom';
// import { connect } from "react-redux"
// import Login from '../components/login/Login';

// export const AuthContext = createContext()

// const Auth = ({children}) => {

//   const [currentUser, setCurrentUser] = useState(null)

//   // const signup = useCallback(async (email, password) => {
//   //   await auth.createUserWithEmailAndPassword(email, password)
//   // }, [])

//   // const signup = useCallback(async (email, password) => {
//   //   await auth.signInWithEmailAndPassword(email, password)
//   // }, [])

//   const signout = useCallback(async () => {
//     await firebase.auth().signOut()
//   }, [])

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged(user => setCurrentUser(user), [])
  // })

//   return (
//     <AuthContext.Provider value={{ currentUser, signout }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }
// export default connect()(Auth);