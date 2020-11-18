import { combineReducers} from 'redux';
import SignUpReducer from './SignUpreducer';
import LoginReducer from './SignInreducer';


const rootReducer = combineReducers({
    SignUpStatus: SignUpReducer,
    LoginStatus: LoginReducer,
});

export default rootReducer;