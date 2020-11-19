import { put, call } from "redux-saga/effects";
import axiosCall from "../services/index";
import { PollListSuccess, PollListError,PollListRequest } from "../redux/action/actions";

export function* pollListSaga(action){
    try{
        const url = `/list_polls`

        const response = yield call(
            axiosCall,
            "GET",
            url,
        );

        if (response) {
            yield put (PollListSuccess(response.data.data))
        } else {
            yield put (PollListError(response.error))
        }
    } catch(error){
        yield put(PollListError(error));
    }
}