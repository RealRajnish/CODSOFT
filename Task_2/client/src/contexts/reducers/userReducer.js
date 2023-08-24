const userReducer = (state, action) => {
  if (action.type === "USER") {
    return {
      ...state,
      userLoggedIn: true,
    };
  }
  if (action.type === "SET_ROOTUSER") {
    return {
      ...state,
      rootUser: action.payload,
    };
  }
  if (action.type === "GET_ALL_TRAIN_TICKETS") {
    return {
      ...state,
      trainTickets: action.payload,
    };
  }

  return state;
};
export default userReducer;
