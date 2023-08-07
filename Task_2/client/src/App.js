import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyle";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import TrainBooking from "./pages/TrainBooking";
import HotelBooking from "./pages/HotelBooking";
import FlightBooking from "./pages/FlightBooking";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import { UserProvider } from "./contexts/userContext";

const App = () => {
  return (
    <>
      <UserProvider>
        <Router>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header />
            <Wrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/trainBooking" element={<TrainBooking />} />
                <Route path="/hotelBooking" element={<HotelBooking />} />
                <Route path="/flightBooking" element={<FlightBooking />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </Wrapper>
            <Footer />
          </ThemeProvider>
        </Router>
      </UserProvider>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 8rem;
  min-height: 100vh;
`;
export default App;
