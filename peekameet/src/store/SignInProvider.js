import React, { useState, useEffect, useCallback } from "react";
import { SignInContext } from "./signin-context-initial";
import {success} from '../api/mocks/userLogin';


 export const SignInContextProvider = () => {
    const [userData, setUserData] = useState({});
    const [isSuccess, setIsSuccess] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

   const getData =  (userEmail, userPassword) => {
        const url = 'https://apipeekameet.closudzmall.com/peekameet/api/v1/public/user/login';
      fetch(url, {
          method: "POST",
          body: JSON.stringify({  
            email: userEmail,
            password: userPassword,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((respone)=>{
            return respone.json();
        })
        .then((response)=>{
          console.log("response",response);
        const {success, httpCode, data} = response;
        console.log("success")
        if(success === true){
            setLoading(false);
        }
        if(httpCode === 200){
            setIsSuccess(true);
            setUserData(data);
        }
        if(httpCode !== 200){
            setError("error");
        }
    }).catch((error)=>{
        console.log("?",error)
        // setError(error);
        console.log(success.data[0].token)
        setUserData(success);
    })
  };

//   useEffect(()=>{
//       getData();
//   }, [])

  const contextValue = {
    isFetching: loading,
    isSuccess: isSuccess,
    error: error,
    data: userData,
  };

  return (
    <div>
      <SignInContext.Provider value={contextValue}></SignInContext.Provider>
    </div>
  );
};

export default SignInContext;