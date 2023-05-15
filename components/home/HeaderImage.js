"use client";
import React from "react";
import { motion } from "framer-motion";

export default function HeaderImage() {
  return (
    <motion.img
      src="/images/header.jpg"
      className="w-72 sm:w-96 rounded-full shadow-lg border-2 border-[#d58bfa] shadow-[#0e8044]"
      animate={{
        borderRadius: ["50% 50% 50% 50%", "45% 45% 45% 45%", "40% 40% 40% 40%", "50% 50% 50% 50%"],
      }}
      transition={{ duration: 2, repeat: Infinity }}
      alt="image"
    />
  );
}
