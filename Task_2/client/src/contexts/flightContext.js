import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducers/flightReducer";
import { API_4 } from "../api/Api";
import axios from "axios";

const FlightContext = createContext();

const initialState = {
  airportList: [],
};
const FlightProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // for getting list of airports
  const getAirports = async () => {
    try {
      const resp = await axios.get(API_4);
      dispatch({
        type: "AIRPORT_LIST_RETREIVE",
        payload: resp.data,
      });
      // console.log(resp.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAirports();
  }, []);
  return (
    <FlightContext.Provider value={{ ...state }}>
      {children}
    </FlightContext.Provider>
  );
};
// custom user hook
const useFlightContext = () => {
  return useContext(FlightContext);
};

export { FlightContext, FlightProvider, useFlightContext };
