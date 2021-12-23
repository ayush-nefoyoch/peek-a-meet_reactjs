import actionTypes from "../actionTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case actionTypes.FETCH_USERS_SUCCESS: {
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    }
    case actionTypes.FETCH_USERS_FAILURE:{
        return{
            loading: false,
            users: [],
            error: action.payload

        }
    }
    default:
            return state;
  }
};
