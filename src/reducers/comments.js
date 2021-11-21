import { commentsAction } from '../actions';

export const initialState = {
  data: [],
  errors: false,
  isFetching: false,
};

export function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case commentsAction.ADD_COMMENT:
      const { postCode, author: user, comment: text } = action.payload.comment;
      return {
        ...state,
        data: [...state.data, { postCode, user, text }],
      };
    case commentsAction.REMOVE_COMMENT:
      return {
        ...state,
        data: state.data.filter(
          (comment, index) => index !== action.payload.index
        ),
      };
    case commentsAction.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        data: [...action.payload.comments],
        error: false,
      };
    case commentsAction.START_COMMENTS_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case commentsAction.STOP_COMMENTS_FETCHING:
      return {
        ...state,
        isFetching: false,
        error: false,
      };
    case commentsAction.SET_FETCHING_COMMENTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
