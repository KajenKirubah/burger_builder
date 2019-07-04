import * as actionTypes from "./actions";
import axios from "axios";

const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

const authSuccess = authData => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData: authData
  };
};

const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error
  };
};

export const auth = (email, password, isSignup) => {
  return dispatch => {
    dispatch(authStart());
    let url =
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBAP-2JNW0F319G9b_9G_kE66RFMzJX-lU";

    if(!isSignup) {
        url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBAP-2JNW0F319G9b_9G_kE66RFMzJX-lU' 
    }  
    const authData = {
      email,
      password,
      returnSecureToken: true
    };
    axios
      .post(url, authData)
      .then(resp => {
        console.log(resp);
        dispatch(authSuccess(resp.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(authFail(err));
      });
  };
};
