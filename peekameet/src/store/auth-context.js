import React from "react";

export const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token)=>{},
    logout: ()=>{},
    userData:{},
    getData: (userData)=>{}
})
