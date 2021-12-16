import actionTypes from "../actionTypes";
import axios from "axios";
import usernote from "../../api/mocks/userNote";
import success from "../../api/mocks/userLogin";

const fetchUsersRequest = () => {
  return {
    type: actionTypes.FETCH_USERS_REQUEST,
  };
};
const fetchUsersSuccess = (users) => {
  return {
    type: actionTypes.FETCH_USERS_SUCCESS,
    payload: users,
  };
};
const fetchUsersFailure = (error) => {
  return {
    type: actionTypes.FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUserNote = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest);
    axios
      .get(
        `http://apipeekameet.cloudzmall.com/peekameet/api/v1/followUpNotes/${success.data[0].customer._id}`,
        {
          headers: {
            Authorization: "Bearer " + success.data[0].token,
          },
        }
      )
      .then((response) => {
        // response.data is the array of users
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error;
        console.log(usernote);
        dispatch(fetchUsersSuccess(usernote));
        dispatch(fetchUsersFailure(errorMsg));
        // error is the error description
      });
  };
};

export const saveNotes = () => async (dispatch, getState) => {
  const notes = getState().notes;
  dispatch(fetchUsersRequest);
  await fetch(
    `http://apipeekameet.cloudzmall.com/peekameet/api/v1/followUpNote`,
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + success.data[0].token,
      },
      body: JSON.stringify({
        createdFor: success.data[0].customer._id,
        noteText: notes,
      }),  
    })
    .then((response)=>{
        dispatch(fetchUsersSuccess(response))
        alert("in success block")
    })
    .catch((error)=>{
        const errorMsg = error.message;
        alert("in error block")
        // console.log(usernote);
        // dispatch(fetchUsersSuccess(usernote));
        // dispatch(fetchUsersFailure(errorMsg));
    })
};

// export default fetchUsers;
