import React from "react";
import styled from "styled-components";
import SearchingTrain from "../components/Booking/Train/SearchingTrain";

const TrainBooking = () => {
  return (
    <Wrapper>
      <div className="main">Train Booking page</div>
      <SearchingTrain />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.dark.black};
  font-size: 2.4rem;
`;

export default TrainBooking;
