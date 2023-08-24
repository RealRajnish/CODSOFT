import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Select from "react-select";
import { useTrainContext } from "../../contexts/trainContext";

const Train = () => {
  // const [From, setFrom] = useState(null);
  // const [To, setTo] = useState(null);
  const [Cabin, setCabin] = useState(null);
  const [state, setState] = useState({});
  const {
    stationList,
    getTrainsBtwSt,
    trainStationStart,
    setTrainStationStart,
    trainStationEnd,
    setTrainStationEnd,
  } = useTrainContext();

  const navigate = useNavigate();

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = () => {
    console.log("handlesubmit called");
    // getTrainsBtwSt({ start: From.value, end: To.value });
    getTrainsBtwSt({
      start: trainStationStart.value,
      end: trainStationEnd.value,
    });
    navigate("/trainBooking");
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
        <div className="layer1">
          <div className="input-field-1">
            {/* <label htmlFor="from">From</label>
          <input type="text" id="from" /> */}
            <label htmlFor="from">From</label>
            <Select
              id="from"
              className="select-box"
              options={stationList}
              // defaultValue={From}
              // onChange={setFrom}
              defaultValue={trainStationStart}
              onChange={setTrainStationStart}
            />
          </div>
          <div className="input-field-1">
            {/* <label htmlFor="to">To</label>
          <input type="text" id="to" /> */}
            <label htmlFor="to">To</label>
            <Select
              className="select-box"
              options={stationList}
              // defaultValue={To}
              // onChange={setTo}
              defaultValue={trainStationEnd}
              onChange={setTrainStationEnd}
            />
          </div>
          <div className="input-field-1">
            <label htmlFor="cabin-class">Cabin Class</label>

            <Select
              className="select-box"
              options={options3}
              defaultValue={Cabin}
              onChange={setCabin}
            />
          </div>
        </div>
        <div className="layer2">
          <div className="input-field">
            <label htmlFor="departure">Departure</label>
            <input
              type="date"
              id="departure"
              value={state.departure}
              name="departure"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="adult">Adult</label>
            <input
              type="number"
              max={5}
              min={0}
              id="Adult"
              value={state.adult}
              name="adult"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="child">Child</label>
            <input
              type="number"
              max={5}
              min={0}
              id="child"
              value={state.child}
              name="child"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="input-field-btn">
            <button onClick={() => handleSubmit()}>Search Trians</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  min-height: 20rem;
  .main {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    flex-wrap: wrap;

    .layer1 {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;

      .input-field-1 {
        width: 25rem;

        .select-box {
          color: black;
          height: 4rem;
          /* min-width: 25rem; */
        }
      }
    }

    .layer2 {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      .input-field {
        display: flex;
        flex-direction: column;
        width: 15rem;

        input {
          padding: 0.5rem;
          height: 4rem;
          width: 100%;
        }
      }

      .input-field-btn {
        display: flex;
        align-items: end;
        justify-content: end;
        flex-grow: 1;
      }
    }
  }
`;
export default Train;
