import React from "react";
import styled from "styled-components";
import BookingSection from "../components/Home_Components/BookingSection";
import PartnersSection from "../components/Home_Components/PartnersSection";
import UserReviewsSection from "../components/Home_Components/UserReviewsSection";

const Home = () => {
  return (
    <Wrapper>
      <BookingSection />
      {/* <div className="glassy-element box">heey buddy</div> */}
      <PartnersSection />
      <UserReviewsSection />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
