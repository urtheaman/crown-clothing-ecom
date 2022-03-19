import actionTypes from "./user-action-types";

const setUser = (user) => ({
  type: actionTypes.SET_USER_STATE,
  payload: user,
});

export default setUser