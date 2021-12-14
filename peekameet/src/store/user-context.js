import React from 'react';

export const UserContext = React.createContext({
  isFetching: false,
  isSuccess: false,
  error: "",
  userDetails: {},
  getAPIData: () => {},  
})