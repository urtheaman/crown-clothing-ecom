import DATA from "./shop.data.json";
const INIT_STATE = {
  collections: DATA,
};

const shopReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
