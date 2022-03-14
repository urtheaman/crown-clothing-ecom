const INIT_STATE = {sections: []};

const directoryReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SET_DIRECTORY_DATA":
      return {
        ...state,
        sections: action.payload,
      };
    default:
      return state;
  }
};

export default directoryReducer;
