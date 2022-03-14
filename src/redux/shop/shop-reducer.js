const INIT_STATE = {
  collections: {}
};

const shopReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SET_SHOP_DATA":
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
