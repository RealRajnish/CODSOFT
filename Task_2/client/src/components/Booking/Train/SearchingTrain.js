import React, { useState } from "react";
import styled from "styled-components";
import Train from "./Train";
import Select from "react-select";
import { useTrainContext, getSeats } from "../../../contexts/trainContext";

const SearchingTrain = () => {
  const {
    trainBtwSt,
    stationList,
    trainStationStart,
    trainStationEnd,
    setTrainStationEnd,
    setTrainStationStart,
    getTrainsBtwSt,
  } = useTrainContext();
  const [Cabin, setCabin] = useState(null);

  const [selectedDate, setSelectedDate] = useState("");
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const date = { day, month, year };

  const handleDateChange = (event) => {
    const dateValue = event.target.value;
    setSelectedDate(dateValue);

    const parsedDate = new Date(dateValue);
    const year = parsedDate.getFullYear();
    const month = (parsedDate.getMonth() + 1).toString().padStart(2, "0"); // Month ranges from 0 to 11
    const day = parsedDate.getDate().toString().padStart(2, "0");
    setDay(day);
    setMonth(month);
    setYear(year);
  };

  const handleSubmit = () => {
    console.log("handlesubmit called");
    // getTrainsBtwSt({ start: From.value, end: To.value });
    getTrainsBtwSt({
      start: trainStationStart.value,
      end: trainStationEnd.value,
    });
    // setDate({ date: { day, month, year } });
    // navigate("/trainBooking");
  };

  const options3 = [
    { value: "all", label: "All Classes" },
    { value: "1A", label: "AC First Class" },
    { value: "2A", label: "AC 2 Tier" },
    { value: "3A", label: "AC 3 Tier" },
    { value: "sleeper", label: "Sleeper" },
  ];

  return (
    <Wrapper>
      <div className="main">
        <div className="search_section">
          <div className="header">Search Train with trip Buddy</div>
          <div className="input_section">
            <div className="layer1">
              <div className="input-field-1">
                <label htmlFor="from">From</label>
                <Select
                  id="from"
                  className="select-box"
                  options={stationList}
                  defaultValue={trainStationStart}
                  onChange={setTrainStationStart}
                />
              </div>
              <div className="input-field-1">
                <label htmlFor="to">To</label>
                <Select
                  className="select-box"
                  options={stationList}
                  defaultValue={trainStationEnd}
                  onChange={setTrainStationEnd}
                />
              </div>
              {/* <div className="input-field-1">
                <label htmlFor="cabin-class">Cabin Class</label>

                <Select
                  className="select-box"
                  options={options3}
                  defaultValue={Cabin}
                  onChange={setCabin}
                />
              </div> */}
              <div className="input-field-4">
                <div className="label">
                  <label htmlFor="date">Date:</label>
                </div>
                <div className="input-date">
                  <input
                    type="date"
                    name="date"
                    id="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                  />
                </div>
              </div>
            </div>
            <div className="layer2">
              <button onClick={() => handleSubmit()}>search Trains</button>
            </div>
          </div>
        </div>
        <div className="train_results">
          {trainBtwSt &&
            trainBtwSt.map((elem) => (
              <Train key={elem.train} elem={elem} date={date} />
            ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default SearchingTrain;
