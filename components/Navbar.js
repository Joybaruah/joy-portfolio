"use client";
import React from "react";

// fonts
import { fontDMSerifDisplay, fontDMSans } from "@/utils/fonts";
import { useState } from "react";

// icons
import { GrInstagram, GrLinkedin, GrGithub } from "react-icons/gr";
import { TbMenu } from "react-icons/tb";

import { motion } from "framer-motion"

export default function Navbar() {
  const [active, setActive] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-50%" },
  }

  return (
    <header>
      <div className="p-4 sm:p-5 flex justify-between items-center">
        <div className="flex align-bottom items-end gap-10">
          <h1
            className="text-text text-3xl cursor-pointer"
            style={fontDMSerifDisplay.style}
          >
            Joy Baruah
          </h1>
          <ul
            style={fontDMSans.style}
            className="text-text cursor-pointer hidden md:block"
          >
            <li>
              <div>
                <a className="hover:text-primary transition-colors duration-200">
                  Works
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className="md:flex gap-4 hidden">
          <GrInstagram
            size={23}
            className="cursor-pointer text-primary hover:scale-110 transform transition duration-200"
          />
          <GrLinkedin
            size={23}
            className="cursor-pointer text-primary hover:scale-110 transform transition duration-200"
          />
          <GrGithub
            size={23}
            className="cursor-pointer text-primary hover:scale-110 transform transition duration-200"
          />
        </div>

        <div
          className="md:hidden block"
          onClick={() => setActive((prev) => !prev)}
        >
          <TbMenu size={23} className="cursor-pointer text-primary" />
        </div>
      </div>

      <motion.div
        className={`flex-col p-5 h-[100vh] bg-[#f2f2f2]/80 w-full absolute z-50 drop-shadow-sm ${
          active ? "flex" : "hidden"
        }`}
        animate={active ? "open" : "closed"}
      variants={variants}
      >
        <ul style={fontDMSans.style} className="text-text cursor-pointer">
          <li>
            <div>
              <a className="text-xl">Works</a>
            </div>
          </li>
        </ul>
        <div className="flex gap-4 mt-[20%]">
          <GrInstagram
            size={23}
            className="cursor-pointer text-primary hover:scale-110 transform transition duration-200"
          />
          <GrLinkedin
            size={23}
            className="cursor-pointer text-primary hover:scale-110 transform transition duration-200"
          />
          <GrGithub
            size={23}
            className="cursor-pointer text-primary hover:scale-110 transform transition duration-200"
          />
        </div>
      </motion.div>
    </header>
  );
}
