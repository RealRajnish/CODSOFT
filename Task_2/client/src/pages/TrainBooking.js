import React from "react";
import styled from "styled-components";

const TrainBooking = () => {
  return (
    <Wrapper>
      <div className="main">Train Booking page</div>
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
