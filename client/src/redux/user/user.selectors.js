import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectSWitchSignUpSignIn = createSelector(
  [selectUser],
  (user) => user.signUpSwitch
);

export const selectCurrentUserStatus = createSelector(
  [selectUser],
  (user) => user.currentUser.status
);

export const selectUserProfile = createSelector(
  [selectUser],
  (user) => user.currentUser.data.user
);

export const selectUserProfileToken = createSelector(
  [selectUser],
  (user) => user.currentUser.token
);


