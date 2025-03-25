// src/components/Toggle.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toggleAnim } from "../animation"; // Yangi toggle animatsiyasini import qilamiz

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.div layout onClick={() => setToggle(!toggle)} className="toggle">
      <motion.h4 layout>{title}</motion.h4>
      <AnimatePresence>
        {toggle && (
          <motion.div
            variants={toggleAnim} // Yangi toggle animatsiyasini qo‘llaymiz
            initial="hidden"
            animate="show"
            exit="exit"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default Toggle;
