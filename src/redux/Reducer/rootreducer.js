import { combineReducers} from 'redux';
import SignUpReducer from './SignUpreducer';
import LoginReducer from './SignInreducer';
import PollListReducer from './pollListreducer';
import DeletePollreducer from './deletepollreducer';
import CreateNewPollreducer from "./addNewpollreducer";
import UpdateTitlereducer from "./updatepolltitlereducer";
import AddNewOptionreducer from "./addnewoptionreducer";
import DeleteOptionreducer from "./deleteoptionreducer";


const rootReducer = combineReducers({
    SignUpStatus: SignUpReducer,
    LoginStatus: LoginReducer,
    PollListStatus: PollListReducer,
    DeletePollstatus: DeletePollreducer,
    AddPollstatus:CreateNewPollreducer,
    UpdateTitlestatus: UpdateTitlereducer,
    AddNewOptionstatus: AddNewOptionreducer,
    DeleteOptionstatus: DeleteOptionreducer,
});

export default rootReducer;