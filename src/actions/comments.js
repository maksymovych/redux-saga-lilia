export const commentsAction = {
  ADD_COMMENT: '[Comments] Add Comment',
  REMOVE_COMMENT: '[Comments] Remove Comment',
  FETCH_COMMENTS: '[Comments] Fetch Comments',
  FETCH_COMMENTS_SUCCESS: '[Comments] Fetch Comments Success',
  START_COMMENTS_FETCHING: '[Comments] Start Comments Fetching',
  STOP_COMMENTS_FETCHING: '[Comments] Stop Commnets Fetching',
  SET_FETCHING_COMMENTS_ERROR: '[COMMENTS] Set Fetching Comments Error',
};

export const addComment = (comment) => ({
  type: commentsAction.ADD_COMMENT,
  payload: { comment },
});

export const removeComment = (index, postCode) => ({
  type: commentsAction.REMOVE_COMMENT,
  payload: { index, postCode },
});

export const fetchCommentsSuccess = (comments) => ({
  type: commentsAction.FETCH_COMMENTS_SUCCESS,
  payload: { comments },
});

export function startCommentsFetching() {
  return {
    type: commentsAction.START_COMMENTS_FETCHING,
  };
}

export function stopCommentsFetching() {
  return {
    type: commentsAction.STOP_COMMENTS_FETCHING,
  };
}

export function fetchComments(id) {
  return {
    type: commentsAction.FETCH_COMMENTS,
    payload: { id },
  };
}

export function setfetchingError(payload) {
  return {
    type: commentsAction.SET_FETCHING_COMMENTS_ERROR,
    error: true,
    payload,
  };
}
