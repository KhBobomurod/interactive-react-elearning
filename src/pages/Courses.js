// src/pages/Courses.js
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Rasmlar
import react from "../img/react1.jpg";
import javascript from "../img/js2.jpg"; // JavaScript uchun mos rasm
import node from "../img/node2.jpg"; // Node.js uchun mos rasm
// Animatsiya
import { motion } from "framer-motion";
import { pageAnimation, fade, photoAnim } from "../animation";

const Courses = () => {
  return (
    <StyledCourses
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Course variants={fade}>
        <motion.div className="card-content" variants={fade}>
          <h2>Interaktiv React va Redux</h2>
          <p>
            React va Redux yordamida zamonaviy veb-ilovalarni qurishni
            o‘rganing.
          </p>
        </motion.div>
        <Link to="/courses/react">
          <motion.img variants={photoAnim} src={react} alt="react" />
        </Link>
      </Course>
      <Course variants={fade}>
        <motion.div className="card-content" variants={fade}>
          <h2>JavaScript Asoslari</h2>
          <p>
            JavaScriptning asoslarini o‘rganing va oddiy loyihalar yarating.
          </p>
        </motion.div>
        <Link to="/courses/javascript">
          <motion.img variants={photoAnim} src={javascript} alt="javascript" />
        </Link>
      </Course>
      <Course variants={fade}>
        <motion.div className="card-content" variants={fade}>
          <h2>Node.js va Backend Dasturlash</h2>
          <p>Node.js yordamida backend dasturlash va API qurishni o‘rganing.</p>
        </motion.div>
        <Link to="/courses/nodejs">
          <motion.img variants={photoAnim} src={node} alt="nodejs" />
        </Link>
      </Course>
    </StyledCourses>
  );
};

// Styled Components
const StyledCourses = styled(motion.div)`
  min-height: 100vh;
  padding: 5rem 10rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  background: #1b1b1b;
  @media (max-width: 1300px) {
    padding: 3rem 5rem;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 768px) {
    padding: 2rem 3rem;
  }
  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`;

const Course = styled(motion.div)`
  flex: 1 1 30%;
  margin: 1rem 0;
  background: #2a2a2a;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  }
  .card-content {
    padding: 1.5rem;
    text-align: center;
    h2 {
      font-size: 1.8rem;
      color: #fff;
      margin-bottom: 0.5rem;
    }
    p {
      font-size: 1rem;
      color: #ccc;
      line-height: 1.5;
    }
  }
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    border-bottom: 3px solid #30bee1;
  }
  @media (max-width: 1300px) {
    flex: 1 1 100%;
    max-width: 500px;
    .card-content {
      h2 {
        font-size: 1.6rem;
      }
      p {
        font-size: 0.9rem;
      }
    }
    img {
      height: 35vh;
    }
  }
  @media (max-width: 768px) {
    max-width: 400px;
    .card-content {
      h2 {
        font-size: 1.4rem;
      }
      p {
        font-size: 0.85rem;
      }
    }
    img {
      height: 30vh;
    }
  }
  @media (max-width: 480px) {
    max-width: 100%;
    .card-content {
      h2 {
        font-size: 1.2rem;
      }
      p {
        font-size: 0.8rem;
      }
    }
    img {
      height: 25vh;
    }
  }
`;

export default Courses;
