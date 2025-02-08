import React from "react";
// import components
import AboutSection from "../components/AboutSection";
import BenefitsSection from "../components/BenefitsSection";
import FaqSection from "../components/FaqSection";
// animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <BenefitsSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
