/**
 * Base template to handle different login method (here just email login)
 */
import axios from 'axios';

export const actionTypes = {
  Start: '[Authentication] - Start',
  Success: '[Authentication] - Success',
  Failed: '[Authentication] - Failed',
  Logout: '[Authentication] - Logout',
};

const emailLoginStart = (email, password) => {
  return {
    type: actionTypes.Start,
    payload: {
      email,
      password,
    },
  };
};

const loginSuccess = (data) => {
  return {
    type: actionTypes.Success,
    payload: {
      auth: data,
    },
  };
};

const loginFailed = (error) => {
  return {
    type: actionTypes.Failed,
    payload: {
      error,
    },
  };
};

const logout = () => {
  return {
    type: actionTypes.Logout,
  };
};

export const emailLogin = (email, password) => {
  return (dispatch) => {
    dispatch(emailLoginStart(email, password));

    const endpoint = 'http://DUMMY_ENDPOINT.com/auth/login';

    axios
      .post(endpoint, {
        email,
        password,
        returnSecureToken: true,
      })
      .then((response) => {
        dispatch(loginSuccess(response.data));
      })
      .catch((error) => {
        dispatch(loginFailed(error));
        dispatch(logout());
      });
  };
};

export const refreshToken = () => {
  return (dispatch) => {
    dispatch(logout());
  };
};
