import React from "react";

export const SignInContext = React.createContext({
    isFetching: false,
    isSuccess: false,
    error: '',
    data: {},
});
