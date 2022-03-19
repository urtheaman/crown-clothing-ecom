import directoryActionTypes from "./directory.action-types";

const INIT_STATE = {
  isDirFetching: false,
  sections: [],
  errorMessage: "",
};

const directoryReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case directoryActionTypes.FETCH_DIR_DATA_START:
      return {
        ...state,
        isDirFetching: true,
      };

    case directoryActionTypes.FETCH_DIR_DATA_SUCCESS:
      return {
        ...state,
        sections: action.payload,
        isDirFetching: false,
      };

    case directoryActionTypes.FETCH_DIR_DATA_FAILURE:
      return {
        ...state,
        isDirFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default directoryReducer;
