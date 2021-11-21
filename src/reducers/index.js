import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { commentsReducer } from './comments';
import { postsReducer } from './posts';
import { userReducer } from './user';
import { connectRouter } from 'connected-react-router';

export const history = createBrowserHistory();

const rootReducer = (history) =>
  combineReducers({
    posts: postsReducer,
    comments: commentsReducer,
    user: userReducer,
    router: connectRouter(history),
  });

export default rootReducer(history);
