import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducer from "../contexts/reducers/userReducer";
import axios from "axios";
import { API_3, API_4, API_5, API_6 } from "../api/Api";

const UserContext = createContext();

const initialState = {
  userLoggedIn: false,
  rootUser: { name: "", email: "", contact: "" },
};
const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // for setting userLoggedIn status true
  const setLoggedIn = () => {
    dispatch({ type: "USER" });
  };

  const checkLoggedInStatus = async () => {
    try {
      const resp = await axios.get(API_3, {
        withCredentials: true,
      });
      // console.log(resp);
      const { username, email, contact } = resp.data;
      dispatch({
        type: "SET_ROOTUSER",
        payload: { username, email, contact },
      });
      setLoggedIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkLoggedInStatus();
  }, []);

  return (
    <UserContext.Provider
      value={{
        ...state,
        checkLoggedInStatus,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// custom user hook
const useUserContext = () => {
  return useContext(UserContext);
};

export { useUserContext, UserContext, UserProvider };
