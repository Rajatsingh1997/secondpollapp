import { createAction } from "redux-actions";
import * as actions from "../Constant";


export const SignUpRequest = createAction(actions.SIGN_UP_REQUEST);
export const SignUpSuccess = createAction(actions.SIGN_UP_SUCCESS);
export const SignUpError = createAction(actions.SIGN_UP_ERROR);

export const SignInRequest = createAction(actions.SIGN_IN_REQUEST);
export const SignInSuccess = createAction(actions.SIGN_IN_SUCCESS);
export const SignInError = createAction(actions.SIGN_IN_ERROR);