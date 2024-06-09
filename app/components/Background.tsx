"use client";

import { useMediaQuery } from "@mui/material";
import Spline from "@splinetool/react-spline";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function Background() {
  const [scope, animate] = useAnimate();
  const isDesktop = useMediaQuery("(min-width:768px)");

  useEffect(() => {
    const handleAnimation = async () => {
      isDesktop &&
        (await animate(scope.current, { top: "0" }, { duration: 3 }));
      !isDesktop &&
        (await animate(scope.current, { top: "0" }, { duration: 2, delay: 3 }));
      isDesktop &&
        (await animate("#spline", { opacity: 1 }, { delay: 2.5, duration: 1 }));
      !isDesktop && (await animate("#spline", { opacity: 1 }, { duration: 1 }));
    };
    handleAnimation();
  }, [isDesktop, scope, animate]);

  return (
    <>
      <motion.div
        ref={scope}
        initial={{ top: "100vh" }}
        animate={isDesktop ? { width: "100vw" } : { top: "0" }}
        transition={{ delay: 3, duration: 2 }}
        className={`bg-blue1 fixed top-0 right-0 w-[100vw] md:w-[42%] h-[100vh] ${
          !isDesktop && "z-[2]"
        }`}
      >
        {" "}
        <Spline
          id="spline"
          className="opacity-0"
          scene="https://prod.spline.design/pb83ZeYMDDInjptd/scene.splinecode"
        />
      </motion.div>
    </>
  );
}
