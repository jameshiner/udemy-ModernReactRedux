const userReducer = (state = {}, action) => {
  // console.log(action.type);
  switch (action.type) {
    case 'GET_USER':
      // console.log(action.payload);
      const newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    default:
      return state;
  }
};

export default userReducer;
