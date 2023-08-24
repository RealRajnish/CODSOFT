import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducer from "./reducers/trainReducer";
import axios from "axios";
import { API_5, API_6, API_7 } from "../api/Api";

const TrainContext = createContext();

const initialState = {
  stationList: [],
  trainBtwSt: [],
  trainChoice: {},
  date: {},
};
const TrainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [trainStationStart, setTrainStationStart] = useState(null);
  const [trainStationEnd, setTrainStationEnd] = useState(null);

  // for getting list of railways stations
  const getRailStaions = async () => {
    try {
      const resp = await axios.get(API_5);
      // console.log(resp.data);
      dispatch({
        type: "RAILWAY_STATION_LIST_RETREIVE",
        payload: resp.data,
      });
    } catch (e) {
      console.log(e);
    }
  };

  // for getting trains between Stations
  const getTrainsBtwSt = async ({ start, end }) => {
    try {
      // console.log("getTrain called with", start, end);
      const resp = await axios.post(API_6, { start, end });
      dispatch({
        type: "TRAIN_BTW_ST",
        payload: resp.data,
      });
      console.log(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  // setting to and from location in train choice
  const setTrainStation = ({ start, end }) => {
    dispatch({
      type: "SET_TRAIN_ST",
      payload: { start, end },
    });
  };

  // setting train and cabin
  const setTrainAndCabin = ({
    name,
    train,
    date,
    cabin,
    departure,
    arrival,
  }) => {
    dispatch({
      type: "SET_TRAIN_ST",
      payload: { name, train, cabin, departure, date, arrival },
    });
  };

  // for booking train tickets
  const bookTicket = async ({ user_id, passengers, contact, train }) => {
    try {
      const resp = await axios.post(API_7, {
        user_id,
        passengers,
        contact,
        train,
      });
      console.log(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  // setting date
  const setDate = ({ date }) => {
    dispatch({
      type: "SET_DATE",
      payload: date,
    });
  };

  useEffect(() => {
    getRailStaions();
  }, []);
  return (
    <TrainContext.Provider
      value={{
        ...state,
        trainStationStart,
        setTrainStationStart,
        trainStationEnd,
        setTrainStationEnd,
        getTrainsBtwSt,
        bookTicket,
        setTrainStation,
        setTrainAndCabin,
        setDate,
      }}
    >
      {children}
    </TrainContext.Provider>
  );
};

// custom Train hook
const useTrainContext = () => {
  return useContext(TrainContext);
};
export { TrainContext, TrainProvider, useTrainContext };
