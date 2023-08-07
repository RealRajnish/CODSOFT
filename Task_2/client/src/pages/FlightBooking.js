import React from "react";
import styled from "styled-components";

const FlightBooking = () => {
  return (
    <Wrapper>
      <div className="main">Flight Booking page</div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.dark.black};
  font-size: 2.4rem;
`;
export default FlightBooking;
