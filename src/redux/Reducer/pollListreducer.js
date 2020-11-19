import * as actions from "../constant";
const initialState={
    isPollfetched:false,
    isError:false,
    isLoading:false,
    poll:[],
}
const PollListReducer = (state=initialState,action)=>{
    switch(action.type){
        
        case actions.POLL_LIST_REQUEST:
            return {
                ...state,
                isloading:true,
            };
        case actions.POLL_LIST_SUCCESS:
                return{
                    ...state,
                    isloading:false,
                    isPollfetched:true,
                    poll:action.payload,
                }
            case action.POLL_LIST_ERROR:
                return{
                    ...state,
                    isPollfetched: false,
                    isError: true,
                    isLoading: false,
                    error: action.payload,
                    }
        default:
            return state;
    }
};
export default PollListReducer;