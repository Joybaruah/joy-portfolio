"use client";
import React from "react";

export default function HeaderImage() {
  return (
    <div className="relative">
      <img
        src="/images/header.jpg"
        className="w-72 sm:w-80 absolute z-30 shadow-lg"
        alt="image"
      />
      <div className="border-2 border-text translate-x-4 translate-y-4">
        <img
          src="/images/header.jpg"
          className="w-72 sm:w-80 opacity-0"
          alt="image"
        />
      </div>
    </div>
  );
}
