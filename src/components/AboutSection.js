// src/components/AboutSection.js
import React from "react";
import homeIntro from "../img/home-intro.jpg";
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";

const AboutSection = () => {
  return (
    <StyledAbout>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Be educated so that</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              you <span>can change</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>the world.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          An educated mind can teach many. An educated mind is better than an
          empty one.
        </motion.p>
        <motion.button variants={fade}>About Us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          src={homeIntro}
          alt="man reading book"
        />
      </Image>
    </StyledAbout>
  );
};

const StyledAbout = styled(About)`
  padding: 5rem 10rem;
  background: #222;
  min-height: auto; /* Balandlikni avtomatik qildik */
  @media (max-width: 1300px) {
    padding: 3rem 5rem;
    flex-direction: column;
    text-align: center;
  }
  @media (max-width: 768px) {
    padding: 2rem 3rem;
  }
  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`;

export default AboutSection;
