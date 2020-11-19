import { put, call } from "redux-saga/effects";
import axiosCall from "../services/index";
import { CreateNewPollError, CreateNewPollSuccess } from "../redux/action/actions";
export function* CreateNewPollSaga(action){
    try{
        let option = action.payload.options;
        let title = action.payload.title;
        let length = option.length;
        let optionString = "";
        option.map((opt, index)=>{
            if (index===length-1) {
                optionString += opt;
            } else{
                optionString += opt + "____";
            }
        })
        const url = `/add_poll?title=${title}&options=${optionString}`
        const response = yield call(
            axiosCall,
            "POST",
            url,
        );
        console.log(response,   "response from the API");
        
        let data = response.data;
        if (data.error === 0) {
            yield put (CreateNewPollSuccess({response:data.data}))
        } else {
            yield put (CreateNewPollError({response:data.error}))
        }
    } catch(error){
        yield put(CreateNewPollError("Unexpected error occured"));
    }
}