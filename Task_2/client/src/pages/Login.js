import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import axios from "axios";
import { API_1, API_2 } from "../api/Api";
import { useUserContext } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
    contact: "",
  });

  const { checkLoggedInStatus } = useUserContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setState({ ...state, [name]: value });
  };

  const handleClick = (val) => {
    const container = document.querySelector(".container");
    if (val === "signin") {
      container.classList.remove("right-panel-active");
      console.log("sign in invoked");
    } else {
      container.classList.add("right-panel-active");
      console.log("sign up invoked");
    }
  };

  const loginBtn = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(API_1, {
        username: state.username,
        password: state.password,
      });
      console.log(resp.data);
      if (resp.data.code === 3) {
        checkLoggedInStatus();
        navigate("/");
      }
    } catch (error) {
      console.log(error.msg);
    }
  };
  const signUpBtn = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(API_2, {
        username: state.username,
        email: state.email,
        password: state.password,
        contact: state.contact,
      });
      console.log(resp.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Wrapper>
      <div className="main">
        <div className="container right-panel-active">
          {/* Sign Up form  */}
          <div className="container__form container--signup">
            <form className="form" id="form1">
              <h2 className="form__titile">Sign Up</h2>
              <div className="input-box">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  value={state.username}
                  onChange={(e) => handleChange(e)}
                  name="username"
                  id="username"
                />
              </div>
              <div className="input-box">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  value={state.email}
                  onChange={(e) => handleChange(e)}
                  name="email"
                  id="email"
                />
              </div>
              <div className="input-box">
                <label htmlFor="password">password</label>
                <input
                  type="password"
                  value={state.password}
                  onChange={(e) => handleChange(e)}
                  name="password"
                  id="password"
                />
              </div>
              <div className="input-box">
                <label htmlFor="cpassword">confirm password</label>
                <input
                  type="password"
                  value={state.cpassword}
                  onChange={(e) => handleChange(e)}
                  name="cpassword"
                  id="cpassword"
                />
              </div>
              <div className="input-box">
                <label htmlFor="contact">Contact</label>
                <input
                  type="text"
                  maxLength={10}
                  minLength={10}
                  value={state.contact}
                  onChange={(e) => handleChange(e)}
                  name="contact"
                  id="contact"
                />
              </div>
              <button onClick={signUpBtn}>sign Up</button>
            </form>
          </div>

          {/* Sign In form */}
          <div className="container__form container--signin">
            <form className="form" id="form2">
              <h2 className="form__title">Sign In</h2>
              <div className="input-box">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  value={state.username}
                  name="username"
                  id="username"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="input-box">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  value={state.password}
                  name="password"
                  id="password"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <Button onClick={loginBtn}>Sign in</Button>
            </form>
          </div>

          {/* Overlay  */}
          <div className="container__overlay">
            <div className="overlay">
              <div className="overlay__panel overlay--left">
                <Button onClick={(e) => handleClick("signin")}>Sign In</Button>
              </div>
              <div className="overlay__panel overlay--right">
                <Button onClick={(e) => handleClick("signup")}>Sign Up</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.dark.black};
  font-size: 2.4rem;

  .main {
    display: flex;
    background: url("https://res.cloudinary.com/dci1eujqw/image/upload/v1616769558/Codepen/waldemar-brandt-aThdSdgx0YM-unsplash_cnq4sb.jpg");
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;

    .container {
      background-color: ${({ theme }) => theme.colors.dark.lg_grey};
      height: 50rem;
      max-width: 62rem;
      flex-grow: 1;
      overflow: hidden;
      position: relative;
      box-shadow: 0 0.9rem 1.7rem rgba(0, 0, 0, 0.25),
        0 0.7rem 0.7rem rgba(0, 0, 0, 0.22);
      border-radius: 1rem;
      /* width: 100%; */
      display: flex;

      .container__form {
        height: 100%;
        position: absolute;
        top: 0;
        transition: all 0.6s ease-in-out;
        /* width: 50%; */
      }

      .container--signin {
        left: 0;
        width: 50%;
        z-index: 2;
      }

      .container--signup {
        left: 0;
        opacity: 0;
        width: 50%;
        z-index: 1;
        height: 100%;
      }

      .container__overlay {
        height: 100%;
        left: 50%;
        overflow: hidden;
        position: absolute;
        top: 0;
        transition: transform 0.6s ease-in-out;
        width: 50%;
        z-index: 100;
      }

      .overlay {
        background-color: var(--lightblue);
        background: url("https://res.cloudinary.com/dci1eujqw/image/upload/v1616769558/Codepen/waldemar-brandt-aThdSdgx0YM-unsplash_cnq4sb.jpg");
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100%;
        left: -100%;
        position: relative;
        transform: translateX(0);
        transition: transform 0.6s ease-in-out;
        width: 200%;
      }

      .overlay__panel {
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        position: absolute;
        text-align: center;
        top: 0;
        transform: translateX(0);
        transition: transform 0.6s ease-in-out;
        width: 50%;
      }
      .overlay--left {
        transform: translateX(-20%);
      }

      .overlay--right {
        right: 0;
        transform: translateX(0);
      }

      @keyframes show {
        0%,
        49.99% {
          opacity: 0;
          z-index: 1;
        }

        50%,
        100% {
          opacity: 1;
          z-index: 5;
        }
      }
    }
    .container.right-panel-active .container--signin {
      transform: translateX(100%);
      z-index: -1;
    }
    .container.right-panel-active .overlay--right {
      transform: translateX(20%);
    }
    .container.right-panel-active .overlay--left {
      transform: translateX(0);
    }
    .container.right-panel-active .overlay {
      transform: translateX(50%);
    }
    .container.right-panel-active .container__overlay {
      transform: translateX(-100%);
    }
    .container.right-panel-active .container--signup {
      animation: show 0.6s;
      opacity: 1;
      transform: translateX(100%);
      z-index: 6;
    }
  }
`;

export default Login;
