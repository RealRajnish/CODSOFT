import React, { useState } from "react";
import styled from "styled-components";
import Flight from "./Flight";
import Hotel from "./Hotel";
import Train from "./Train";

const BookingSection = () => {
  const [state, setState] = useState("flight");

  return (
    <Wrapper>
      <div className="main">
        <div className="travel_switcher">
          <div
            className={state === "flight" ? "active links" : "links"}
            onClick={() => setState("flight")}
          >
            Flight
          </div>
          <div
            className={state === "train" ? "active links" : "links"}
            onClick={() => setState("train")}
          >
            Train
          </div>
          <div
            className={state === "hotel" ? "active links" : "links"}
            onClick={() => setState("hotel")}
          >
            Hotels
          </div>
        </div>
        <div className="main_components">
          <div
            className={
              state === "flight" ? "active component" : "component d-none"
            }
          >
            <Flight />
          </div>
          <div
            className={
              state === "hotel" ? "active component" : "component d-none"
            }
          >
            <Hotel />
          </div>
          <div
            className={
              state === "train" ? "active component" : "component d-none"
            }
          >
            <Train />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  flex-grow: 1;
  background-image: linear-gradient(to right, #decba4, #3e5151);
  font-size: 1.6rem;
  min-height: 45rem;
  color: black;
  align-items: center;
  justify-content: center;

  .main {
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    /* overflow: hidden; */
    /* padding: 1rem;  */

    .travel_switcher {
      display: flex;
      border-top-right-radius: 1rem;
      /* overflow: hidden; */

      .links {
        padding: 1rem;
        color: white;
        font-weight: 500;
        font-size: 2.4rem;
        background-color: #3e5151;

        &:hover {
          cursor: pointer;
          color: aliceblue;
        }
        &:last-child {
          border-top-right-radius: 1rem;
        }
      }

      .active.links {
        background-color: #decba4;
      }
    }

    .main_components {
      background-color: #3e5151;
      color: white;
      min-width: 40rem;
      padding: 1rem;
      border-top-right-radius: 1rem;

      /* .active.component {
        background-color: #decba4;
      } */
      .d-none.component {
        display: none;
      }
    }
  }
`;
export default BookingSection;
