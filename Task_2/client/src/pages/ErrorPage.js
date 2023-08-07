import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="main">Error Page 404</div>
      <div className="button">
        <NavLink to="/">
          <Button>Back to Home Page</Button>
        </NavLink>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.dark.black};
  font-size: 2.4rem;
`;

export default ErrorPage;
