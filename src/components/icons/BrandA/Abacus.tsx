import * as React from "react";
import type { SVGProps } from "react";
const SvgAbacus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M5 3v18M19 21V3M5 7h14M5 15h14M8 13v4M11 13v4M16 13v4M14 5v4M11 5v4M8 5v4M3 21h18" />
  </svg>
);
export default SvgAbacus;
