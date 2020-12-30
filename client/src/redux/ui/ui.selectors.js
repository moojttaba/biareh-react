import { createSelector } from "reselect";

const selectUi = (state) => state.ui;

export const selectDrawerHidden = createSelector(
  [selectUi],
  (state) => state.hidden
);

export const selectDrawerOrders = createSelector(
  [selectUi],
  (state) => state.orders
);

export const selectDrawerProducts = createSelector(
  [selectUi],
  (state) => state.products
);

export const selectDrawerAnalysis = createSelector(
  [selectUi],
  (state) => state.analysis
);

export const selectDrawerMarketing = createSelector(
  [selectUi],
  (state) => state.marketing
);

export const selectDrawerStore = createSelector(
  [selectUi],
  (state) => state.store
);
