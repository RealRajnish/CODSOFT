import React from "react";
import styled from "styled-components";

const HotelBooking = () => {
  return (
    <Wrapper>
      <div className="main">Hotel booking Page</div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.dark.black};
  font-size: 2.4rem;
`;

export default HotelBooking;
