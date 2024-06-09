"use client";

import { useMediaQuery } from "@mui/material";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function ColorColumns() {
  const [scope, animate] = useAnimate();
  const isDesktop = useMediaQuery("(min-width:768px)");

  useEffect(() => {
    const handleAnimation = async () => {
      await animate(
        scope.current,
        { scaleX: "0", translateX: "-50%" },
        { delay: 3, duration: 2 }
      );
    };

    if (isDesktop) handleAnimation();
  }, [isDesktop, scope, animate]);

  return (
    <motion.div
      ref={scope}
      initial={{ top: "100vh" }}
      animate={{ top: "0" }}
      transition={{ duration: 3 }}
      className="fixed top-0 left-0 w-[39%] md:w-[42%] h-[100vh] flex flex-row"
    >
      <div className="bg-pink1 w-1/3 "></div>
      <div className="bg-pink2 w-1/3 "></div>
      <div className="bg-pink3 w-1/3 "></div>
    </motion.div>
  );
}
