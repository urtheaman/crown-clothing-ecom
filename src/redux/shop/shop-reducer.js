import shopActionTypes from "./shop.action-types";

const INIT_STATE = {
  isFetching: false,
  collections: {},
  errorMessage: undefined,
};

const shopReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.FETCH_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case shopActionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case shopActionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
