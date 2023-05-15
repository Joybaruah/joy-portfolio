"use client";
import { fontDMSans, fontDMSerifDisplay } from "@/utils/fonts";
import React, { createRef, useEffect, useRef } from "react";

export default function Header() {
  const ref = createRef();

  function hideElement(index, element) {
    element?.children[index].classList.add("hidden");
    element?.children[(index + 1) % 4].classList.remove("hidden");
  }

  useEffect(() => {
    let i = 0;
    setInterval(() => {
      hideElement(i, ref.current);
      i = (i + 1) % 4;
    }, 1500);
  }, [ref]);

  return (
    <section className="">
      <h1
        className="text-4xl sm:text-5xl text-text font-bold"
        style={fontDMSans.style}
      >
        Hi I'm a
      </h1>
      <h1
        className="text-4xl sm:text-5xl text-text font-bold"
        style={fontDMSans.style}
      >
        Software Engineer
      </h1>
      <h1
        className="text-4xl sm:text-5xl text-text font-bold"
        style={fontDMSans.style}
      >
        I work in
      </h1>
      <div ref={ref}>
        <h1
          className="text-primary text-3xl sm:text-5xl"
          style={fontDMSerifDisplay.style}
        >
          Web
        </h1>
        <h1
          className="text-primary text-3xl sm:text-5xl hidden"
          style={fontDMSerifDisplay.style}
        >
          Mobile
          </h1>
        <h1
          className="text-primary text-3xl sm:text-5xl hidden"
          style={fontDMSerifDisplay.style}
        >
          Backend
        </h1>
        <h1
          className="text-primary text-3xl sm:text-5xl hidden"
          style={fontDMSerifDisplay.style}
        >
          Server
        </h1>
      </div>
    </section>
  );
}
