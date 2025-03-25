// src/components/Nav.js
import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          e-Learning
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/courses">Courses</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/courses" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">Contact</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #2a2e35;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.3s ease;
    &:hover {
      color: #30bee1;
    }
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-weight: lighter;
    font-size: 1.8rem;
    font-family: "Silkscreen", cursive;
  }
  li {
    padding-left: 5rem;
    position: relative;
  }
  @media (max-width: 1300px) {
    padding: 1rem 5rem;
    flex-direction: column;
    #logo {
      display: inline-block;
      margin-bottom: 1rem;
    }
    ul {
      margin-top: 1rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
  @media (max-width: 768px) {
    padding: 1rem 3rem;
    #logo {
      font-size: 1.5rem;
    }
    a {
      font-size: 1rem;
    }
  }
  @media (max-width: 480px) {
    padding: 1rem 1rem;
    #logo {
      font-size: 1.3rem;
    }
    a {
      font-size: 0.9rem;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  width: 0%;
  background: #30bee1;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
    width: 100%;
    height: 0.2rem;
    bottom: -50%;
  }
`;

export default Nav;