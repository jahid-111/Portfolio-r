/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reval = ({
  children,
  width = "fit-content",
  slide = false,
  delay = 0,
}) => {
  const ref = useRef(null);
  const isView = useInView(ref);
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isView) {
      mainControls.start("visible");
      if (slide) {
        slideControls.start("visible");
      }
    }
  }, [isView, mainControls, slide, slideControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: slide ? { opacity: 0, x: -75 } : { opacity: 0, y: 75 },
          visible: { opacity: 1, x: 0, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reval;
