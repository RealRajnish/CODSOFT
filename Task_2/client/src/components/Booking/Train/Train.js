import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useTrainContext } from "../../../contexts/trainContext";

const Train = ({ elem, date }) => {
  const [select, setSelect] = useState("");
  const {
    setTrainStation,
    trainStationStart,
    trainStationEnd,
    setTrainAndCabin,
  } = useTrainContext();

  const navigate = useNavigate();

  const handleBooking = () => {
    if (!date.day) {
      window.alert("please enter date filed properly");
    } else if (select === "") {
      window.alert("please select cabin class");
    } else {
      setTrainStation({
        start: trainStationStart.value,
        end: trainStationEnd.value,
      });
      setTrainAndCabin({
        name: elem.name.toUpperCase(),
        train: elem.train,
        cabin: select,
        date: date,
        departure: elem.departure,
        arrival: elem.arrival,
      });
      navigate("/addPassenger");
    }
  };

  return (
    <Wrapper>
      <div className="main">
        <div className="train_info">
          <div className="box1">
            <div className="label">Departure</div>
            <div className="value">{elem.departure}</div>
          </div>
          <div className="box2">
            <div className="name">{elem.name.toUpperCase()}</div>
            <div className="number">{elem.train}</div>
          </div>
          <div className="box3">
            <div className="label">Arrival</div>
            <div className="value">{elem.arrival}</div>
          </div>
        </div>
        <div className="seat_info">
          <div
            className={
              select === "sleeper"
                ? "active cabin-box sleeper"
                : "sleeper cabin-box"
            }
            onClick={() => setSelect("sleeper")}
          >
            <div className="text">sleeper (SL)</div>
            <div className="seats">Refresh</div>
          </div>
          <div
            className={
              select === "AC3" ? "active cabin-box AC3" : "AC3 cabin-box"
            }
            onClick={() => setSelect("AC3")}
          >
            AC tier 3 (3A)
          </div>
          <div
            className={
              select === "AC2" ? "active cabin-box AC2" : "AC2 cabin-box"
            }
            onClick={() => setSelect("AC2")}
          >
            AC tier 2 (2A)
          </div>
          <div
            className={
              select === "AC1" ? "active cabin-box AC1" : "AC1 cabin-box"
            }
            onClick={() => setSelect("AC1")}
          >
            AC tier 1 (1A)
          </div>
        </div>
        <div className="booking">
          <div className="book-btn">
            <button onClick={() => handleBooking()}>Book</button>
          </div>
          <div className="price">{elem.fares[select]}</div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  border: 1px solid black;
  .main {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 0.5rem;
    .train_info {
      display: flex;

      .box1,
      .box3 {
        .value {
          display: flex;
          justify-content: center;
        }
      }

      .box2 {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .name {
          display: flex;
          justify-content: center;
        }
        .number {
          display: flex;
          justify-content: center;
        }
      }
    }
    .seat_info {
      display: flex;
      gap: 1rem;

      .cabin-box {
        height: 8rem;
        padding: 1rem;
        cursor: pointer;
      }
      .active {
        background-color: peachpuff;
      }
    }
    .booking {
      display: flex;
      gap: 1rem;
    }
  }
`;
export default Train;
