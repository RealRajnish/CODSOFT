import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <div className="glassy-element box">heey buddy</div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .box {
    min-height: 90vh;
    width: 90%;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
  }
`;
export default Home;
