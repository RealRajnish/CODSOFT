import { createContext, useContext, useReducer } from "react";
import reducer from "./reducers/hotelReducer";

const HotelContext = createContext();

const initialState = {};
const HotelProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <HotelContext.Provider value={{ ...state }}>
      {children}
    </HotelContext.Provider>
  );
};
// custom user hook
const useHotelContext = () => {
  return useContext(HotelContext);
};

export { HotelContext, HotelProvider, useHotelContext };
