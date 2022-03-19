import userActionTypes from "./user-action-types";

export const googleSigninStart = () => ({
  type: userActionTypes.GOOGLE_SIGNIN_START,
});

export const emailSigninStart = ({ email, password }) => ({
  type: userActionTypes.EMAIL_SIGNIN_START,
  payload: { email, password },
});

export const signinSuccess = (user) => ({
  type: userActionTypes.SIGNIN_SUCCESS,
  payload: user,
});

export const signinFailure = (errorMessage) => ({
  type: userActionTypes.SIGNIN_FAILURE,
  payload: errorMessage,
});

export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION,
});

export const signoutStart = () => ({
  type: userActionTypes.SIGN_OUT_START,
});

export const signoutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS,
});

export const signoutFailure = (errorMessage) => ({
  type: userActionTypes.SIGN_OUT_FAILURE,
  payload: errorMessage,
});

export const signupStart = ({ name, email, password }) => ({
  type: userActionTypes.SIGN_UP_START,
  payload: { name, email, password },
});

export const signupFailure = (errorMessage) => ({
  type: userActionTypes.SIGN_UP_FAILURE,
  payload: errorMessage,
});
