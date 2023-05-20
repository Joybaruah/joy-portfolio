import { fontDMSans } from "@/utils/fonts";
import React from "react";
import { HiLink } from "react-icons/hi";

export default function WorkCard({ work }) {
  return (
    <div
      className="border-2 border-secondary shadow-lg p-4"
      style={fontDMSans.style}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl text-primary">{work.title}</h3>
        <a
          href={work.link}
          target="_blank"
          className="bg-accent/20 p-2 rounded-full"
        >
          <HiLink size={20} className="text-accent" />
        </a>
      </div>

      <p className="text-text">{work.description}</p>

      <div className="flex flex-wrap pr-2 mt-3">
        {work.tech.map((t) => {
          return (
            <div className="text-dull text-sm px-4 py-1 bg-dull/20 m-1 rounded-full" key={t}>
              {t}
            </div>
          );
        })}
      </div>
    </div>
  );
}
