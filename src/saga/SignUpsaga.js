
import { call, put } from "redux-saga/effects";
import axiosCall from "../services/index";
import { SignUpSuccess, SignUpError } from "../redux/action/actions";




function* SignUpsaga(action) {
  try {
    const username = action.payload.username;
    const password = action.payload.password;
    const option = action.payload.option;
   
    const url = `/add_user?username=${username}&password=${password}&role=${option}`;
    
    const response = yield call(
        axiosCall,
        "POST",
        url, 
        );
    const { data } = response;
    
    // console.log(response, "response from the API");
    
    // console.log(data, "api data");

    if (data.error === 0) {
      // console.log(data.data, "xyzzzzzz")
      yield put(SignUpSuccess(data.data));
    }

    if (data.error === 1) {
      console.log(data.message, "azzzzzzzzzzzzzz");
      yield put(SignUpError(data.message))
    }
  } catch (error) {
    console.log("Unexpacted error occured");
    yield put(SignUpError("unexpected error occured"));
  }
}

export default SignUpsaga;