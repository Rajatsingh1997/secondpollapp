import * as actions from "../constant";

const initialState={
    isLoading:false,
    isSignedIn:false,
};
export const SignInreducer =(state=initialState,action)=>{
    switch(action.type){
        case actions.SIGN_IN_REQUEST:
            return{
                ...state,
                isLoading:true,
            }
            case actions.SIGN_IN_SUCCESS:
                return{
                    ...state,
                    isSignedIn:true,
                    isLoading: false,
                    response: action.payload,
                };
            case actions.SIGN_IN_ERROR:
                return{
                    isSignedIn: false,
                    isLoading:false,
                    error: action.payload,
                };
            default:
                return state;
    }
}
export default SignInreducer;