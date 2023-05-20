import { fontDMSerifDisplay } from "@/utils/fonts";
import React from "react";

import { works } from "../../data/works";
import WorkCard from "@/components/works/WorkCard";

export default function page() {
  return (
    <div className="min-h-screen">
      <section className="p-7 max-w-3xl mx-auto">
        <h2
          className="text-3xl font-semibold my-2 text-text mb-4"
          style={fontDMSerifDisplay.style}
        >
          Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {works.map((work) => {
            return (
                <WorkCard work={work} key={work.id} />
            );
          })}
        </div>
      </section>
    </div>
  );
}
