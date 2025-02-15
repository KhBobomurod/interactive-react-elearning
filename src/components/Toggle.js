import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.div layout onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      <AnimatePresence>
        {toggle && <motion.div>{children}</motion.div>}
      </AnimatePresence>
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default Toggle;
