import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer">Footer</div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  font-size: 2.4rem;
  background-color: ${({ theme }) => theme.colors.dark.grey};
  min-height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Footer;
