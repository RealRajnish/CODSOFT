import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../contexts/reducers/userReducer";
import axios from "axios";
import { API_3, API_4 } from "../api/Api";

const UserContext = createContext();

const inititalState = {
  userLoggedIn: false,
  rootUser: { name: "", email: "", contact: "" },
  airportList: [],
};
const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, inititalState);

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

  const getAirports = async (req, res) => {
    try {
      const resp = await axios.get(API_4);
      dispatch({
        type: "AIRPORT_LIST_RETREIVE",
        payload: resp.data,
      });
      console.log(resp.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    checkLoggedInStatus();
    getAirports();
  }, []);

  return (
    <UserContext.Provider value={{ ...state, checkLoggedInStatus }}>
      {children}
    </UserContext.Provider>
  );
};

// custom user hook
const useUserContext = () => {
  return useContext(UserContext);
};

export { useUserContext, UserContext, UserProvider };
