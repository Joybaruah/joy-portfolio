import { fontDMSans } from "@/utils/fonts";
import React from "react";

export default function ExpCard() {
  return (
    <div className="max-w-full">
      <div className="flex flex-col sm:flex-row gap-5">
        <p style={fontDMSans.style}>Aug - Sep 2022</p>

        <div className="bg-secondary p-4 w-full sm:w-[70%] rounded-md shadow-sm ">
          <h3 style={fontDMSans.style} className="text-text text-lg">
            Frontend Developer Intern : Wireone Labs
          </h3>
        </div>
      </div>
    </div>
  );
}
