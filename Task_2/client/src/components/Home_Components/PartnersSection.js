import React from "react";
import styled from "styled-components";

const PartnersSection = () => {
  return (
    <Wrapper>
      <div className="main">partner section</div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: linear-gradient(to right, #2c3e50, #4ca1af);
  flex-grow: 1;
  min-height: 10rem;
`;
export default PartnersSection;
