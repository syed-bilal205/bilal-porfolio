import React from "react";
import { motion, useScroll } from "framer-motion";

const HorizontalScroll = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[10px] origin-left bg-[#20c863] z-50"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
};

export default HorizontalScroll;
