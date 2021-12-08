import React, {useEffect, useState, useCallback} from 'react';
import {AuthContext} from './auth-context';


let logoutTimer;


const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();
    const remainingDuration = adjExpirationTime - currentTime;
    return remainingDuration;
}

// to delete token if it is not valid
const retrievedStoredToken = ()=>{
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime');

    const remainingTime = calculateRemainingTime(storedExpirationDate);

    if(remainingTime <= 60000){
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        return null;
    }
    return {
        token: storedToken,
        duration: remainingTime
    }
}

export const AuthContextProvider = (props) =>{

    // for deleting token
    const tokenData = retrievedStoredToken();
    let initialToken;
    if(tokenData){
        initialToken = tokenData.token;
    }
    // -------------
    // const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);
    const [userData, setUserData] = useState('');
    const userIsLoggedIn = !!token; // if token has no string return false

    const logoutHandler = useCallback(()=>{
        setToken(null);
        localStorage.removeItem('token')
        localStorage.removeItem('expirationTime')
        // if user manually logout then clear token time
        if(logoutTimer){
            clearTimeout(logoutTimer);
        }
    }, [])

    const loginHandler = (token, expirationTime) =>{
        setToken(token);
        localStorage.setItem('token', token)
        localStorage.setItem('expirationTime', expirationTime)

        const remainingTIme = calculateRemainingTime(expirationTime);
        // logout handler will execute after timer expires
        logoutTimer = setTimeout(logoutHandler, remainingTIme);
    }
    
    const getDataHandler = (userData)=>{
        setUserData(userData);
    }

    useEffect(()=>{
        if(tokenData){
            console.log(tokenData.duration)
            logoutTimer = setTimeout(logoutHandler, tokenData.duration);

        }
    }, [tokenData, logoutHandler])

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        userData:userData,
        getData: getDataHandler
    };

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}
// now we can use this as a wrapper around other component that then will have access to this above context

export default AuthContext;