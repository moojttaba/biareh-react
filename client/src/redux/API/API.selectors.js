import { createSelector } from "reselect";

const selectAPI = (state) => state.API;

export const selectDrawerHidden = createSelector(
  [selectAPI],
  (state) => state.request
);

