/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
const Reval = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isView = useInView(ref);
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    // console.log(isView);
    if (isView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isView, mainControls, slideControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.23 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reval;
