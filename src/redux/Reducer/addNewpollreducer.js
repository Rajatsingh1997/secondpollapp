import * as actions from "../constant";

const initialstate = {
  isLoading: false,
};

const CreateNewPollreducer = (state = initialstate, action) => {
  switch (action.type) {
    case actions.CREATE_NEWPOLL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case actions.CREATE_NEWPOLL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        response: action.payload.response,
      };

    case actions.CREATE_NEWPOLL_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default CreateNewPollreducer;