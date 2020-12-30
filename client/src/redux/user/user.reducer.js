import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: {
    status: null,
    token: null,
    data: {
      user: {
        photo: null,
        role: null,
        _id: null,
        name: null,
        email: null,
      },
    },
  },
  error: null,
  signUpSwitch: true,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.TOGGLE_SIGN_SWITCH:
      return {
        ...state,
        signUpSwitch: !state.signUpSwitch,
      };
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case UserActionTypes.UPDATE_MY_PROFILE_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      
      };
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: {
          status: null,
          token: null,
          data: {
            user: {
              photo: null,
              role: null,
              _id: null,
              name: null,
              email: null,
            },
          },
        },
        error: null,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
