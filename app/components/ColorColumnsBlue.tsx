"use client";

import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { useMediaQuery } from "@mui/material";

export default function ColorColumnsBlue() {
  const [scope, animate] = useAnimate();
  const isDesktop = useMediaQuery("(min-width:768px)");

  useEffect(() => {
    const handleAnimation = async () => {
      await animate(scope.current, { top: "0" }, { duration: 3 });
      await animate("#shrinkcol", { x: "50%", scaleX: "0" }, { duration: 2 });
    };
    const handleAnimationMob = async () => {
      await animate(scope.current, { top: "0" }, { duration: 3 });
    };
    isDesktop ? handleAnimation() : handleAnimationMob();
  }, [isDesktop, scope, animate]);

  return (
    <motion.div
      ref={scope}
      initial={{ top: "100vh" }}
      className="fixed right-0 top-0 w-[39%] md:w-[42%] h-[100vh] flex flex-row"
    >
      <motion.div
        id="expandcol"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={
          isDesktop ? { delay: 3, duration: 0 } : { delay: 5, duration: 0.2 }
        }
        className="bg-blue1 right-0 w-[100vw] h-[100vh]"
      />
      <motion.div
        id="shrinkcol"
        initial={{ top: "100vh" }}
        animate={{ top: "0" }}
        transition={{ duration: 3 }}
        className="fixed flex flex-row top-0 right-0 w-[28%]"
      >
        <div className="bg-blue2 w-1/2 h-[100vh]" />
        <div className="bg-blue3 w-1/2 h-[100vh]" />
      </motion.div>
    </motion.div>
  );
}
