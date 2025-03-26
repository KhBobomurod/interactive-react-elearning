// src/pages/AboutUs.js
import React from "react";
import AboutSection from "../components/AboutSection";
import BenefitsSection from "../components/BenefitsSection";
import FaqSection from "../components/FaqSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <StyledAboutUs
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <BenefitsSection />
      <FaqSection />
    </StyledAboutUs>
  );
};

const StyledAboutUs = styled(motion.div)`
  background: #1b1b1b;
  min-height: 100vh; /* Qayta qo‘shish */
  padding-bottom: 2rem;
`;

export default AboutUs;
