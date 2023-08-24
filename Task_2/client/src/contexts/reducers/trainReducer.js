const trainReducer = (state, action) => {
  if (action.type === "RAILWAY_STATION_LIST_RETREIVE") {
    const temp = action.payload;
    const temp1 = temp.map(({ name, StationCode, city, state }) => ({
      label: `${name} (${StationCode}),${city},${state}`,
      value: StationCode,
    }));
    return {
      ...state,
      stationList: temp1,
    };
  }
  if (action.type === "TRAIN_BTW_ST") {
    const temp = action.payload;
    const mergedArray = temp.data.map((item1) => {
      const matchingItem = temp.trainName.find(
        (item2) => item2.train === item1.train
      );

      //  console.log(matchingItem);
      return { ...item1, ...matchingItem };
    });
    return {
      ...state,
      trainBtwSt: mergedArray,
    };
  }
  if (action.type === "SET_TRAIN_ST") {
    return {
      ...state,
      trainChoice: {
        ...state.trainChoice,
        ...action.payload,
      },
    };
  }
  if (action.type === "SET_DATE") {
    return {
      ...state,

      date: action.payload,
    };
  }

  return { ...state };
};

export default trainReducer;
