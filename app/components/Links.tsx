"use client";

import ghLogo from "@/public/github.svg";
import instaLogo from "@/public/insta.svg";
import shareLogo from "@/public/share.svg";
import tgLogo from "@/public/tg.svg";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    name: "ОГРН",
    num: "1245400007225",
  },
  {
    name: "ИНН",
    num: "5404951579",
  },
  {
    name: "КПП",
    num: "540401001",
  },
] as const;

export default function Links() {
  const isDesktop = useMediaQuery("(min-width:768px)");

  const varNum = isDesktop
    ? {
        initial: {
          translateY: "100px",
        },
        whileHover: {
          translateY: "0px",
        },
      }
    : {
        initial: { translateY: "0px" },
        whileHover: {},
      };

  const varNumOp = isDesktop
    ? {
        initial: { opacity: 0 },
        whileHover: { opacity: 1 },
      }
    : {
        initial: { opacity: 1 },
        whileHover: {},
      };

  const varSocial = isDesktop
    ? {
        initial: {
          translateY: "30px",
        },
        whileHover: {
          translateY: "0px",
        },
      }
    : {
        initial: { translateY: "0px" },
        whileHover: {},
      };

  const varSocialOp = isDesktop
    ? {
        initial: { opacity: 0 },
        whileHover: { opacity: 1 },
      }
    : {
        initial: { opacity: 1 },
        whileHover: {},
      };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 6, duration: 1 }}
      className="flex fixed flex-row w-[91vw] top-[78%] items-start md:items-end justify-between z-[999]"
    >
      <motion.div
        variants={varNum}
        initial={varNum.initial}
        whileHover={varNum.whileHover}
        transition={{ delay: 0.2 }}
        className="text-white text-[0.9rem] flex flex-col items-start gap-[5px]"
      >
        <p className="flex gap-[15px]">
          <span className="font-bold ">©</span>
          <span className="font-bold ">ООО «CАЙНО»</span>
        </p>
        <motion.div
          variants={varNumOp}
          initial={varNumOp.initial}
          whileHover={varNumOp.whileHover}
          className="flex flex-col gap-[5px]"
        >
          {data.map((item, index) => (
            <p key={index} className="flex gap-[15px]">
              <span className="w-[2.8rem] font-light">{item.name}</span>
              <span className="font-light">{item.num}</span>
            </p>
          ))}
          <p>
            <span className="font-light">Работаем с 2022 г.</span>
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        variants={varSocial}
        initial={varSocial.initial}
        whileHover={varSocial.whileHover}
        className="flex flex-col items-end md:items-center"
      >
        <div className="flex flex-row gap-[15px]">
          <span className="text-white text-[0.9rem] font-bold">
            следите за нами
          </span>
          <Image src={shareLogo} alt="share" className="hidden" />
        </div>
        <motion.div
          variants={varSocialOp}
          initial={varSocialOp.initial}
          whileHover={varSocialOp.whileHover}
          className="flex flex-row py-[10px] top-0 opacity-100 px-0 md:px-[30px] gap-[10px] items-end md:items-center justify-center"
        >
          <Link href="">
            <Image
              src={ghLogo}
              alt="github"
              className=" hover:scale-[1.2] transition"
            />
          </Link>
          <Link href="">
            <Image
              src={instaLogo}
              alt="insta"
              className=" hover:scale-[1.2] transition"
            />
          </Link>
          <Link href="">
            <Image
              src={tgLogo}
              alt="tg"
              className=" hover:scale-[1.2] transition"
            />
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
