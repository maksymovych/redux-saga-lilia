import { postsAction } from '../actions';

export const initialState = {
  data: [],
  errors: false,
  isFetching: false,
};

export function postsReducer(state = initialState, action) {
  switch (action.type) {
    case postsAction.LIKE_POST:
      const posts = state.data;
      const i = posts.findIndex((post) => post.id === action.payload.postId);
      return {
        ...state,
        data: [
          ...posts.slice(0, i),
          {
            ...posts[i],
            likes: posts[i].likes + 1,
          },
          ...posts.slice(i + 1),
        ],
      };
    case postsAction.START_POSTS_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case postsAction.STOP_POSTS_FETCHING:
      return {
        ...state,
        isFetching: false,
        error: false,
      };
    case postsAction.SET_FETCHING__POSTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case postsAction.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.payload.posts],
        error: false,
      };
    default:
      return state;
  }
}
