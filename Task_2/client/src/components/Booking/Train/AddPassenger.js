import React, { useState } from "react";
import styled from "styled-components";
import { useTrainContext } from "../../../contexts/trainContext";
import Passengers from "./Passengers";
import { useUserContext } from "../../../contexts/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_7 } from "../../../api/Api";

const AddPassenger = () => {
  const navigate = useNavigate();
  const { trainChoice, uniqueProp, trainBtwSt } = useTrainContext();
  const { rootUser } = useUserContext();
  const [mobileNumber, setMobileNumber] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [passengerCount, setPassengerCount] = useState(1);
  const [passengerDetails, setPassengerDetails] = useState([
    { name: "", age: "" },
  ]);

  const fares = trainBtwSt.find((ele) => ele.train === trainChoice.train);
  // console.log(fares);
  const handleMobileNumberChange = (e) => {
    const inputNumber = e.target.value;
    if (/^\d{0,10}$/.test(inputNumber)) {
      setMobileNumber(inputNumber);
      setIsValid(inputNumber.length === 10 || inputNumber.length === 0);
    }
  };

  // for booking train tickets
  const bookTicket = async ({ user_id, passengers, contact, train, fares }) => {
    try {
      const resp = await axios.post(API_7, {
        user_id,
        passengers,
        contact,
        train,
        fares,
        uniqueProp,
      });
      // console.log(resp.data);
      if (resp.data.code === 1) {
        window.alert(resp.data.msg);
        // console.log(resp.data);
        navigate("/");
      } else if (resp.data.code === 2) {
        window.alert(resp.data.msg);
        // console.log(resp.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handlePurchase = () => {
    if (isValid && mobileNumber && trainChoice) {
      bookTicket({
        user_id: rootUser.email,
        passengers: passengerDetails,
        contact: mobileNumber,
        train: trainChoice,
        fares: fares.fares,
      });
    } else window.alert("Please Fill all Fields properly");
  };

  return (
    <Wrapper>
      <div className="main">
        <div className="title">Adding Passenger Page</div>
        <div className="layer1">
          <div className="train_name">
            {`
            ${trainChoice.name} (${trainChoice.train})
          `}
          </div>
          <div className="content">
            <div className="box">
              <div className="st-name">{`${trainChoice.departure} | ${trainChoice.start}`}</div>
            </div>
            <div className="box"> To </div>
            <div className="box">
              <div className="st-name">{`${trainChoice.arrival} | ${trainChoice.end}`}</div>
            </div>
          </div>
          <div className="cabin">
            <span>{`Class | ${trainChoice.cabin}`}</span>
          </div>
        </div>
        <div className="layer2">
          <Passengers
            passengerDetails={passengerDetails}
            setPassengerCount={setPassengerCount}
            setPassengerDetails={setPassengerDetails}
            passengerCount={passengerCount}
          />
        </div>
        <div className="layer3"></div>
        <div className="layer4">
          <label htmlFor="contact">contact</label>
          <input
            type="tel"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
            maxLength={10}
            style={{ borderColor: isValid ? "initial" : "red" }}
          />
          {!isValid && (
            <p style={{ color: "red" }}>
              Please enter a valid 10-digit mobile number.
            </p>
          )}
        </div>
        <div className="layer5">
          <div className="total_price">
            Total Fares: {fares.fares[trainChoice.cabin] * passengerCount}
          </div>
          <button onClick={handlePurchase}>purchase</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  font-size: 1.8rem;
  color: black;
  .main {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    .title {
      font-size: 2.6rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      color: #3d3b3b;
    }
    .layer1 {
      border: 1px solid #3d3b3b;
      min-height: 12rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 0.5rem;
      .train_name {
        background-color: #b8b8b8;
        padding: 1rem;
        font-weight: bold;
      }
      .content {
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        font-weight: bold;
      }

      .cabin {
        display: flex;
        justify-content: center;
        min-height: 2rem;
        span {
          font-weight: bold;
          padding: 0.5rem;
          background-color: #b8b8b8;
        }
      }
    }
  }
`;

export default AddPassenger;
