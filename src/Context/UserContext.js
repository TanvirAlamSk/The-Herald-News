import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.init';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)
const UserContext = ({ children }) => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [loader, setLoader] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    //-------create user
    const createNewUser = (email, password) => {
        setLoader(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("Sign Up Successful")
            }).catch((error) => {
                setError(error)
            })
    }


    //--------------google sign in
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider).then(() => {
            alert("Login succcess")
        }).catch((error) => {
            setError(error);
        })
    }


    //-----------login--------------

    const userLogin = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)

    }



    //----------------logout-------
    const logout = () => {
        signOut(auth).then(() => {
            alert("Logout Successful")
        }).catch((error) => {
            alert(error)
        })
    }

    //

    //

    useEffect(() => {
        const unsubscriber = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser)
            setLoader(false);
        })
        return () => {
            unsubscriber();
        }
    }, [])

    //





    const authInfo = { user, loader, error, setError, createNewUser, userLogin, logout, googleSignIn }
    return (
        <div>
            <AuthContext.Provider value={authInfo} >{children}</AuthContext.Provider>
        </div>
    );
};

export default UserContext;