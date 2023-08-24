import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducer from "../contexts/reducers/userReducer";
import axios from "axios";
import { API_3, API_4, API_5, API_6, API_9 } from "../api/Api";

const UserContext = createContext();

const initialState = {
  userLoggedIn: false,
  rootUser: { name: "", email: "", contact: "" },
  trainTickets: [],
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

  // get all train tickets
  const getTrainTickets = async () => {
    try {
      const data = await axios.post(API_9, { user_id: state.rootUser.email });
      dispatch({
        type: "GET_ALL_TRAIN_TICKETS",
        payload: data.data,
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    checkLoggedInStatus();
    getTrainTickets();
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
