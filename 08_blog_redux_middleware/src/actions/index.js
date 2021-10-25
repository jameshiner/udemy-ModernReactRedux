// import _ from 'lodash';
import jsonPlaceholder from '../api/jsonPlaceholder';

/* 
BAD APPROACH
breaking the rules of action creator
actions must be plain objects
must use middleware for async actions

export const getPosts = async () => {
  const posts = await jsonPlaceholder.get('/posts');

  return {
    type: 'GET_POSTS',
    payload: posts,
  };
};
*/

// redux thunk allows us to return the normal action obj ORRRRR a function
// the funtion gets called with the dispatch and getState functions
// dispatch allows us to change store data and getState allows us to read store data as needed
// after waiting for some api call we can manually call the dispatch function with our response
export const getPosts = () => async (dispatch) => {
  const { data } = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'GET_POSTS', payload: data });
};

// SOLVING EXTRA API CALLS WITH MEMOIZE:

/* 
export const getUser = (userId) => (dispatch) => {
  _getUser(userId, dispatch);
};

// memoize essentially stores the results of a function
// instead of running the function again with the same params, it just returns the result it got b4
// this saves us from getting the same user over and over again
const _getUser = _.memoize(async (userId, dispatch) => {
  const { data } = await jsonPlaceholder.get(`/users/${userId}`);
  dispatch({ type: 'GET_USER', payload: data });
});
*/

// SOLVING EXTRA API CALLS WITH STORING UNIQUE USERS AHEAD OF TIME:

export const getUser = (userId) => async (dispatch) => {
  const { data } = await jsonPlaceholder.get(`/users/${userId}`);
  dispatch({ type: 'GET_USER', payload: data });
};

export const getPostsAndUsers = () => async (dispatch, getState) => {
  const userSet = new Set();
  // when you have nested action creators, you need to dispatch the result of calling the child
  // use await to wait until the posts are retreived
  await dispatch(getPosts());
  // after this is finished, the posts are store on state.posts
  getState().posts.forEach((post) => userSet.add(post.userId));
  // dont need await here bc we dont have any logic after this
  userSet.forEach((userId) => dispatch(getUser(userId)));
};
