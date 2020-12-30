/* eslint-disable */
import { takeLatest, put, all, call } from "redux-saga/effects";
import UserActionTypes from "./user.types";
import axios from "axios";

import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
  updateMyProfileSuccess,
  updateMyProfileStartFailure,
} from "./user.actions";

export function* updateProfile({ payload: { data, token } }) {
  try {
    const user = yield axios({
      method: "PATCH",
      url: "/api/v1/users/updateMe",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data,
    }).then((response) => response.data);
    // if (res.data.status === "success") {
    //   showAlert("success", `updated successfully!`);
    // }

    yield put(updateMyProfileSuccess(user));
  } catch (error) {
    yield put(updateMyProfileStartFailure(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const user = yield axios({
      method: "POST",
      url: "/api/v1/users/login",
      data: {
        email,
        password,
      },
    }).then((response) => response.data);
    // if (user.status === "success") {
    //   return window.setTimeout(() => {
    //     location.assign("/admin");
    //   }, 1500);
    // }
    yield put(signInSuccess(user));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signOut() {
  try {
    yield axios({
      method: "GET",
      url: "/api/v1/users/logout",
    });
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}



export function* signUp({
  payload: { name, email, password, passwordConfirm },
}) {
  try {
    const user = yield axios({
      method: "POST",
      url: "/api/v1/users/signup",
      data: {
        name,
        email,
        password,
        passwordConfirm,
      },
    }).then((response) => response.data);
    yield put(signUpSuccess(user));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* onUpdateMyProfileStart() {
  yield takeLatest(UserActionTypes.UPDATE_MY_PROFILE_START, updateProfile);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* userSagas() {
  yield all([
    call(onUpdateMyProfileStart),
    call(onEmailSignInStart),
    call(onSignOutStart),
    call(onSignUpStart),
  ]);
}
