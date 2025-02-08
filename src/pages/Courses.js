import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import images
import react from "../img/React.jpg";
import javascript from "../img/js.png";
import soon from "../img/soon.png";
// animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const Courses = () => {
  return (
    <StyledCourses
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Course>
        <h2>Interaktiv React va Redux</h2>
        <div className="line"></div>
        <Link to="/courses/react">
          <img src={react} alt="react" />
        </Link>
      </Course>
      <Course>
        <h2>Tez kunda 😯</h2>
        <div className="line"></div>
        <Link to="/courses/soon">
          <img src={soon} alt="soon" />
        </Link>
      </Course>
      <Course>
        <h2>Interaktiv Javascript</h2>
        <div className="line"></div>
        <Link to="/courses/js">
          <img src={javascript} alt="javascript" />
        </Link>
      </Course>
    </StyledCourses>
  );
};
const StyledCourses = styled(motion.div)`
  min-height: 100vh;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Course = styled.div`
  .line {
    height: 0.5rem;
    background: #ccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default Courses;
