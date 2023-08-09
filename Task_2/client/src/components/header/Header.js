import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useUserContext } from "../../contexts/userContext";

const Header = () => {
  const { userLoggedIn } = useUserContext();

  return (
    <Wrapper>
      <div className="navbar">
        <div className="logo"></div>
        <div className="nav">
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <div className="dropdown">
                  <div className="text">
                    <span>BOOKING</span>
                    <span className="dropdown-icon">
                      <MdKeyboardArrowDown />
                    </span>
                  </div>
                  <div className="dropdown-content">
                    <span className="line-below">
                      <NavLink to="/flightBooking">Flights</NavLink>
                    </span>
                    <span className="line-below">
                      <NavLink to="/trainBooking">Trains</NavLink>
                    </span>
                    <span className="line-below">
                      <NavLink to="/hotelBooking">Hotels</NavLink>
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
              <li className={userLoggedIn ? "d-none" : ""}>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li className={!userLoggedIn ? "d-none" : ""}>
                <NavLink>Logout</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Ensure the header appears above other content */
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.dark.black};
  color: white;
  font-size: 3.2rem;
  align-items: center;
  padding-top: 1.5rem;

  .nav {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    padding-right: 1rem;
    nav {
      width: 100%;
    }
  }
  ul {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: flex-end;
    flex-grow: 1;
    padding-right: 2rem;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.dark.white};
      text-transform: uppercase;
    }
  }

  .dropdown {
    position: relative;
    .text {
      display: flex;
    }
    .dropdown-icon {
      display: grid;
      place-content: center;
    }
    .dropdown-content {
      display: flex;
      flex-direction: column;
      background-color: ${({ theme }) => theme.colors.dark.black};
      /* position: absolute;
      top: -350px; */
      display: none;
    }
    &:hover {
      .dropdown-content {
        /* top: 10px; */
        display: flex;
        .line-below {
          position: relative;
          cursor: pointer;
          padding: 1rem;
        }
        .line-below::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 1px;
          width: 0;
          height: 0.3rem;
          background-color: #007bff; /* Change this color to the desired line color */
          transition: width 0.3s ease; /* Adding the transition */
        }

        .line-below:hover::after {
          width: 100%; /* Expand the line to 100% width on hover */
        }
        a {
          padding: 1rem;
          opacity: 0.55;
          text-transform: uppercase;

          &:hover {
            background-color: ${({ theme }) => theme.colors.dark.black};
            opacity: 1;
          }
        }
      }
    }
  }
  .d-none {
    display: none;
  }
`;
export default Header;
