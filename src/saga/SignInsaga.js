import { call, put } from "redux-saga/effects";
import axiosCall from "../services/index";
import { SignInSuccess, SignInError } from "../redux/action/actions";
import jwt from "jsonwebtoken";

// import React from "react";

function* SignInsaga(action) {
  try {
    const username = action.payload.username;
    const password = action.payload.password;

    const url = `/login?username=${username}&password=${password}`;
    const response = yield call(axiosCall, "POST", url);
    console.log(response, "response from the API");
    const { data } = response;
    console.log(data, "api data");

    if (data.error === 0) {
      let username = jwt.verify(data.token, "jwt_tok");
      yield put(SignInSuccess(username.role));
      localStorage.setItem("token", data.token);
      localStorage.setItem("userType", username.role);
      console.log(data.token, "data token");
      console.log(username.role, "user role");
    }
    if (data.error ===1) {
      console.log(data.message, "message");
      yield put(SignInError(data.data));
    }
  } catch (error) {
    console.log("Unexpacted error occured");
    yield put(SignInError("unexpected error occured"));
  }
}

export default SignInsaga;
