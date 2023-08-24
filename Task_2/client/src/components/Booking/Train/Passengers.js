import React, { useState } from "react";
import styled from "styled-components";

const Passengers = ({
  passengerCount,
  setPassengerCount,
  passengerDetails,
  setPassengerDetails,
}) => {
  const handleAddPassenger = () => {
    setPassengerCount(passengerCount + 1);
    setPassengerDetails([
      ...passengerDetails,
      { name: "", age: "", gender: "" },
    ]);
  };
  const handlePassengerChange = (index, field, value) => {
    const updatedPassengers = [...passengerDetails];
    updatedPassengers[index][field] = value;
    setPassengerDetails(updatedPassengers);
  };
  return (
    <Wrapper>
      <div className="main">
        {passengerDetails.map((passenger, index) => (
          <div key={index}>
            <div className="input_container">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Passenger Name"
                value={passenger.name}
                onChange={(e) =>
                  handlePassengerChange(index, "name", e.target.value)
                }
              />
            </div>
            <div className="input_container">
              <label htmlFor="age">age</label>
              <input
                type="number"
                min={0}
                max={120}
                id="age"
                placeholder="Age in years"
                value={passenger.age}
                onChange={(e) =>
                  handlePassengerChange(index, "age", e.target.value)
                }
              />
            </div>
            <div className="input_container">
              <div className="gender_switcher">
                <label htmlFor="">Gender:</label>
                <div className="switcher">
                  <div
                    className={
                      passengerDetails[index].gender === "male"
                        ? "male active"
                        : "male"
                    }
                    onClick={() =>
                      handlePassengerChange(index, "gender", "male")
                    }
                  >
                    M
                  </div>
                  <div
                    className={
                      passengerDetails[index].gender === "female"
                        ? "female active"
                        : "female"
                    }
                    onClick={() =>
                      handlePassengerChange(index, "gender", "female")
                    }
                  >
                    F
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button onClick={handleAddPassenger}>Add New Passenger</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    div {
      display: flex;
      gap: 3rem;
    }
    .input_container {
      .gender_switcher {
        display: flex;
        gap: 1rem;

        .switcher {
          display: flex;
        }
      }
      .male,
      .female {
        font-size: 2rem;
        cursor: pointer;
        padding: 1rem;
      }
      .active.male,
      .active.female {
        background-color: #0055ff;
        color: white;
      }
    }
  }
`;

export default Passengers;
