"use client";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth";
import React, { useEffect, useState } from "react";

import useAxiosPublic from "../Hook/useaxiospublic";
import { AuthContext } from "./authContext";
import app from "@/lib/Firebase.init";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const axiosPublic = useAxiosPublic();
// console.log("user",user)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true);

      if (currentUser) {
        setUser(currentUser);
        const userInfo = { email: currentUser.email };
        console.log("userInfo",userInfo)
        try {
          const res = await axiosPublic.post("/jwt", userInfo);
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
          }
        } catch (error) {
          console.error("JWT error:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setUser(null);
        localStorage.removeItem("access-token");
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [axiosPublic, auth]);

  // Google Login
  const handegooglelogin = () => signInWithPopup(auth, googleProvider);

  // Logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Register
  const handlenewuser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login with email/password
  const loginwithemail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authinfo = {
    user,
    handegooglelogin,
    loading,
    logout,
    loginwithemail,
    handlenewuser,
    setUser,
  };

  return (
    <AuthContext.Provider value={authinfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;


// 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- sercret


// 994758518387-54lb6o9spgttavtppsn37js16s3g8grn.apps.googleusercontent.com-id