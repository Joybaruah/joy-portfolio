import { fontDMSans } from "@/utils/fonts";
import React from "react";

export default function Footer() {
  return (
    <div
      className="text-sm text-center p-4 text-accent border-t-2"
      style={fontDMSans.style}
    >
      Built without Patience.
    </div>
  );
}
