// src/components/BenefitsSection.js
import React from "react";
import styled from "styled-components";
import { About, Description } from "../styles";
import homeIntro2 from "../img/home-intro2.jpg";
import {
  FaLaptopCode,
  FaChalkboardTeacher,
  FaRocket,
  FaSchool,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { fade, photoAnim, cardAnim, hoverAnim } from "../animation";

const BenefitsSection = () => {
  const benefits = [
    { title: "Online Learning", icon: <FaLaptopCode /> },
    {
      title: "High Experienced Talented Mentors",
      icon: <FaChalkboardTeacher />,
    },
    { title: "Fast Learning Systems", icon: <FaRocket /> },
    { title: "Offline School for Children", icon: <FaSchool /> },
  ];

  return (
    <Benefits>
      <Description>
        <motion.h2 variants={fade}>High-Quality Learning Systems</motion.h2>
        <div className="benefit">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="benefit-item"
              variants={cardAnim}
              whileHover="hover"
              custom={hoverAnim}
            >
              <div className="icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
            </motion.div>
          ))}
        </div>
      </Description>
      <motion.img
        variants={photoAnim}
        src={homeIntro2}
        alt="a girl in the library"
      />
    </Benefits>
  );
};

const Benefits = styled(About)`
  padding: 5rem 10rem;
  flex-direction: row-reverse;
  background: #1b1b1b;
  min-height: auto; /* Balandlikni avtomatik qildik */
  img {
    width: 50%;
    height: 80vh;
    object-fit: cover;
    border-radius: 1rem;
  }
  h2 {
    color: #30bee1;
    padding-bottom: 3rem;
    margin: 0rem 0rem 0rem 5rem;
  }
  .benefit {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .benefit-item {
    display: flex;
    align-items: center;
    background: #333;
    padding: 1rem;
    border-radius: 0.5rem;
    margin: 0rem 0rem 0rem 5rem;
    width: 70%;
    clip-path: polygon(0% 10%, 100% 0%, 100% 91%, 0% 100%);
    border-left: 3px solid #30bee1;
    transition: all 0.3s ease;
    .icon {
      font-size: 2rem;
      color: #30bee1;
      margin-right: 1rem;
    }
    h3 {
      font-size: 1.2rem;
      font-weight: 400;
      color: #fff;
    }
  }
  @media (max-width: 1300px) {
    padding: 3rem 5rem;
    flex-direction: column;
    img {
      width: 100%;
      height: 50vh;
      margin-top: 2rem;
    }
    h2 {
      margin: 0;
      text-align: center;
    }
    .benefit-item {
      margin: 0;
      width: 100%;
      h3 {
        font-size: 1.1rem;
      }
      .icon {
        font-size: 1.8rem;
      }
    }
  }
  @media (max-width: 768px) {
    padding: 2rem 3rem;
    img {
      height: 40vh;
    }
    .benefit-item {
      h3 {
        font-size: 1rem;
      }
      .icon {
        font-size: 1.5rem;
      }
    }
  }
  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    img {
      height: 30vh;
    }
    .benefit-item {
      h3 {
        font-size: 0.9rem;
      }
      .icon {
        font-size: 1.3rem;
      }
    }
  }
`;

export default BenefitsSection;
