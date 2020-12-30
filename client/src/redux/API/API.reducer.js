import APIActionTypes from "./API.types";

const INITIAL_STATE = {
  request: null,
};

const APIReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case APIActionTypes.FETCH_POSTS:
      return {
        ...state,
        request: action.payload.data,
      };

    default:
      return state;
  }
};

export default APIReducer;
