import React from "react";

export const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  isFetching: false,
  isSuccess: false,
  error: "",
  userData: {},
  getAPIData: () => {},
});
