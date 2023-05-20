import { fontDMSans, fontDMSerifDisplay } from "@/utils/fonts";
import React from "react";

export default function ExpCard({ exp }) {
  return (
    <div className="max-w-full my-5">
      <div className="flex flex-col sm:flex-row justify-between">
        <p style={fontDMSans.style} className="text-accent">
          {" "}
          {exp.timeline}
        </p>

        <div className="bg-background border-black border-2 shadow-md p-4 sm:w-[60%] rounded-md mt-3 sm:mt-0">
          <h3 style={fontDMSans.style} className="text-text text-lg">
            {exp.title} • {exp.company}
          </h3>
          <p className="text-text text-sm pt-2" style={fontDMSans.style}>
            {exp.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-8">
            {exp.skills.map((s) => {
              return (
                <div className="bg-primary/20 w-fit px-4 py-1 rounded-full shadow-sm" key={exp.id}>
                  <h4 className="text-primary text-sm" style={fontDMSans.style}>
                    {s}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
