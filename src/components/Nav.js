// src/components/Nav.js
import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

// Nav animatsiyasi
const navVariants = {
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Nav = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false); // Hamburger menyusi holati

  return (
    <StyledNav variants={navVariants} initial="hidden" animate="show">
      <h1>
        <Link id="logo" to="/">
          e-Learning
        </Link>
      </h1>
      <Hamburger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        <span />
        <span />
        <span />
      </Hamburger>
      <ul className={isOpen ? "open" : ""}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/courses" onClick={() => setIsOpen(false)}>
            Courses
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/courses" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
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

// Styled Components
const StyledNav = styled(motion.nav)`
  min-height: 10vh;
  display: flex;
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
    gap: 5rem;
  }

  #logo {
    font-weight: lighter;
    font-size: 1.8rem;
    font-family: "Silkscreen", cursive;
    color: #30bee1;
    transition: color 0.3s ease;
    &:hover {
      color: #1a9cbf;
    }
  }

  li {
    position: relative;
  }

  @media (max-width: 1300px) {
    padding: 1rem 5rem;
    #logo {
      font-size: 1.6rem;
    }
    ul {
      gap: 3rem;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    position: relative;

    #logo {
      font-size: 1.5rem;
    }

    ul {
      display: none; /* Dastlab menyular yashirin */
      flex-direction: column;
      position: absolute;
      top: 10vh;
      left: 0;
      width: 100%;
      background: #2a2e35;
      padding: 1rem 0;
      gap: 1rem;
      text-align: center;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
      z-index: 9;
    }

    ul.open {
      display: flex; /* Menyu ochilganda ko‘rinadi */
    }

    li {
      padding: 1rem 0;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem 1rem;
    #logo {
      font-size: 1.3rem;
    }
    a {
      font-size: 1rem;
    }
  }
`;

const Hamburger = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    position: absolute;
    top: 2rem;
    right: 2rem;
    z-index: 11;

    span {
      width: 25px;
      height: 3px;
      background: #fff;
      transition: all 0.3s ease;
    }

    ${({ isOpen }) =>
      isOpen &&
      `
      span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
      }
    `}

    @media (max-width: 480px) {
      top: 1.5rem;
      right: 1rem;
      span {
        width: 20px;
        height: 2px;
      }
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
  @media (max-width: 768px) {
    bottom: -20%;
  }
`;

export default Nav;
