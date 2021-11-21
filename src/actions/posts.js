export const postsAction = {
  LIKE_POST: '[POSTS] Like Post',
  FETCH_POSTS: '[POSTS] Fetch Posts',
  START_POSTS_FETCHING: '[POSTS] Start Posts Fetching',
  STOP_POSTS_FETCHING: '[POSTS] Stop Posts Fetching',
  SET_FETCHING__POSTS_ERROR: '[POSTS] Set Fetching Posts Error',
  FETCH_POSTS_SUCCESS: '[POSTS] Fetch Posts Success',
  SELECT_POST: '[POSTS] Select Post',
};

export const likePost = (postId) => ({
  type: postsAction.LIKE_POST,
  payload: { postId },
});

export const fetchPostsSuccess = (posts) => ({
  type: postsAction.FETCH_POSTS_SUCCESS,
  payload: { posts },
});

export const selectPost = (post) => ({
  type: postsAction.SELECT_POST,
  payload: { post },
});

export function startPostsFetching() {
  return {
    type: postsAction.START_POSTS_FETCHING,
  };
}

export function stopPostsFetching() {
  return {
    type: postsAction.STOP_POSTS_FETCHING,
  };
}

export function fetchPosts() {
  return {
    type: postsAction.FETCH_POSTS,
  };
}

export function setfetchingError(payload) {
  return {
    type: postsAction.SET_FETCHING__POSTS_ERROR,
    error: true,
    payload,
  };
}
