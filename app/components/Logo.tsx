"use client";

import { useMediaQuery } from "@mui/material";
import {
  motion,
  useAnimate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";
import SvgComponent from "./SvgComponent";

export default function Logo() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [scope, animate] = useAnimate();
  const isDesktop = useMediaQuery("(min-width:768px)");

  useEffect(() => {
    const handleAnimation = async () => {
      await animate(
        scope.current,
        { translateY: "-220px" },
        { duration: 1, delay: 3 }
      );
      await animate(scope.current, { scale: 0.64 }, { duration: 1, delay: 1 });
    };
    const handleAnimDesk = async () => {
      await animate(scope.current, { scale: 0.5 }, { duration: 0 });
    };
    !isDesktop ? handleAnimation() : handleAnimDesk();

    const animation = animate(count, 100, { duration: 3 });
    return animation.stop;
  }, [isDesktop, count, scope, animate]);

  return (
    <motion.div className="w-[16%] fixed top-[30%] md:top-[20%] z-[998] gap-[6rem] flex select-none justify-center items-center flex-col">
      <motion.div>
        <motion.div
          ref={scope}
          initial={
            isDesktop
              ? { scale: 1, translateY: "0px" }
              : { scale: 0.32, translateY: "0px" }
          }
          animate={isDesktop && { scale: 0.5, translateY: "-150px" }}
          transition={{ delay: 3, duration: 1 }}
          className={`${isDesktop ? "scale-100" : "scale-[0.32]"}`}
        >
          <SvgComponent className={`select-none pointer-events-none `} />
        </motion.div>
      </motion.div>
      <motion.h1
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 3 }}
        className="text-blue1 text-[2.9rem] mt-[-100px] md:mt-0 md:text-[7.5rem] leading-none font-bold"
      >
        {rounded}
      </motion.h1>
    </motion.div>
  );
}
