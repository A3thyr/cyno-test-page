"use client";

import { motion } from "framer-motion";

export default function Intro() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 6, duration: 1 }}
      className=" text-white fixed top-[30%] mx-[1.9rem] flex flex-col gap-[1.65rem] z-[999] items-start"
    >
      <p className="text-[1.3rem] min-[326px]:text-[1.5rem] md:text-[2.4rem] xl:text-[3.4rem] leading-tight font-bold">
        Современные IT и веб-решения
        <br />
        для вашего бизнеса
      </p>
      <p className="text-white leading-tight text-[1rem] md:text-[1.4rem] xl:text-[2.19rem] font-meduim">
        Эффективные разработки, повышающие продуктивность и<br />
        безопасность. Оптимизируйте ваш бизнес с нами.
      </p>
      <div className="flex flex-col w-[100%] gap-[1.57rem] md:flex-row md:gap-[3.15rem]">
        <button className="text-white text-[1rem] md:text-[1.5rem] font-light tracking-widest focus:scale-[1.01] hover:scale-[1.03] active:scale-[1.01] transition px-5 bg-pink1 h-[3.7rem]">
          НАПИСАТЬ НАМ
        </button>
        <button className="text-pink1 text-[1rem] md:text-[1.5rem] font-normal tracking-widest focus:scale-[1.01] hover:scale-[1.03] active:scale-[1.01] transition bg-black bg-opacity-15 border-2 border-solid px-5 h-[3.7rem]">
          НАША ПРЕЗЕНТАЦИЯ
        </button>
      </div>
    </motion.div>
  );
}
