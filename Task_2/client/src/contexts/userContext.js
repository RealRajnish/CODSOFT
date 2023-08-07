import { createContext, useContext, useReducer } from "react";
import reducer from "../contexts/reducers/userReducer";

const UserContext = createContext();

const inititalState = {
  userLoggedIn: false,
  rootUser: { name: "", email: "", phone: "" },
};
const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, inititalState);

  return (
    <UserContext.Provider value={{ ...state }}>{children}</UserContext.Provider>
  );
};

// custom user hook
const useUserContext = () => {
  return useContext(UserContext);
};

export { useUserContext, UserContext, UserProvider };
