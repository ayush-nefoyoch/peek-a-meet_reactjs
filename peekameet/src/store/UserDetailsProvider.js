import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./user-context";
import success from "../api/mocks/userLogin";
import { AuthContext } from "./auth-context";

export const UserContextProvider = (props) => {
  const authCtx = useContext(AuthContext);
  // console.log(authCtx.userData.data[0].customer._id)
  const [userDetails, setUserDetails] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getData = () => {
    const url = `https://apipeekameet.closudzmall.com//peekameet/api/v1/user/nearby/${authCtx.userData.data[0].customer._id}`;
    fetch(url, {
      headers: {
        Authorization: "Bearer " + authCtx.userData.data[0].token,
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
          setUserDetails(success.data[0]);
        }
        if (httpCode !== 200) {
          setError("error");
        }
      })
      .catch((error) => {
        console.log("in api call then", error);
        console.log("?", error);
        setUserDetails(success);
      });
  };

  const contextValue = {
    isFetching: loading,
    isSuccess: isSuccess,
    error: error,
    userDetails: userDetails,
    getAPIData: getData,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContext;
