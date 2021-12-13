import React, { useState } from "react";
import { AuthContext } from "./auth-context";
import success from "../api/mocks/userLogin";

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const userIsLoggedIn = !!token;
  const logoutHandler = () => {
    setUserData({});
    setToken(null);
  };

  const loginHandler = (token, expirationTime) => {
    console.log(userData.data[0].token);
    setToken(token);
    setTimeout(logoutHandler, expirationTime);
  };

  const getData = (userEmail, userPassword) => {
    const url =
      "https://apipeekameet.closudzmall.com/peekameet/api/v1/public/user/login";
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
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        const { success, httpCode, data } = response;
        if (success === true) {
          setLoading(false);
        }
        if (httpCode === 200) {
          setIsSuccess(true);
        }
        if (data) {
          setUserData(success.data[0]);
        }
        if (httpCode !== 200) {
          setError("error");
        }
      })
      .catch((error) => {
        console.log("in api call then", error);
        // console.log("?", error);
        setUserData(success);
      });
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    isFetching: loading,
    isSuccess: isSuccess,
    error: error,
    getData: userData,
    getAPIData: getData,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
