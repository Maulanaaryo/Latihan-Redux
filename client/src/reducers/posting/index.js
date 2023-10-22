import {
  GET_POSTING,
  ADD_POSTING,
  DELETE_POSTING,
  DETAIL_POSTING,
  UPDATE_POSTING,
} from "../../actions/PostingAction";

const initialState = {
  getPostingResult: false,
  getPostingLoading: false,
  getPostingError: false,

  addPostingResult: false,
  addPostingLoading: false,
  addPostingError: false,

  deletePostingResult: false,
  deletePostingLoading: false,
  deletePostingError: false,

  detailPostingResult: false,

  updatePostingResult: false,
  updatePostingLoading: false,
  updatePostingError: false,
};

const posting = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTING:
      return {
        ...state,
        getPostingResult: action.payload.data,
        getPostingLoading: action.payload.loading,
        getPostingError: action.payload.errorMessage,
      };

    case ADD_POSTING:
      return {
        ...state,
        addPostingResult: action.payload.data,
        addPostingLoading: action.payload.loading,
        addPostingError: action.payload.errorMessage,
      };

    case DELETE_POSTING:
      return {
        ...state,
        deletePostingResult: action.payload.data,
        deletePostingLoading: action.payload.loading,
        deletePostingError: action.payload.errorMessage,
      };

    case DETAIL_POSTING:
      return {
        ...state,
        detailPostingResult: action.payload.data,
      };

    case UPDATE_POSTING:
      return {
        ...state,
        updatePostingResult: action.payload.data,
        updatePostingLoading: action.payload.loading,
        updatePostingError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default posting;
