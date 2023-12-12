import { createContext } from "react";
import app from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

     // google signin
     const googleSignIn = (value)  => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }


    // sign up
    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };


    // sign in
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


     // log out
     const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // update profile
    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }


    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            if(currentUser){
                const loggedUser = {email: currentUser.email};
                axios.post('http://localhost:5173/jwt', loggedUser, {withCredentials: true})
                .then(res => {
                    console.log('token response', res.data);
                })
            }
        });
        return () => {
            unSubscribed();
        }
    })




    const authInfo = {
        user,
        loading,
        googleSignIn,
        signIn,
        logOut,
        signUp,
        handleUpdateProfile,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;