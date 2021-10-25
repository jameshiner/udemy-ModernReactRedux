const postReducer = (state = [], action) => {
  // console.log(action.type);
  switch (action.type) {
    case 'GET_POSTS':
      return action.payload;
    default:
      return state;
  }
};

export default postReducer;
