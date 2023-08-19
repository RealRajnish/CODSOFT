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

  if (action.type === "AIRPORT_LIST_RETREIVE") {
    const temp = action.payload;
    const temp1 = temp.map(({ name, IATA }) => ({
      label: name + " (" + IATA + ")",
      value: IATA,
    }));
    return {
      ...state,
      airportList: temp1,
    };
  }
  return state;
};
export default userReducer;
