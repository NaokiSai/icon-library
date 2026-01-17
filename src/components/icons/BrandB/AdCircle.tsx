import * as React from "react";
import type { SVGProps } from "react";
const SvgAdCircle = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0" />
    <path d="M7 15v-4.5a1.5 1.5 0 0 1 3 0V15M7 13h3M14 9v6h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z" />
  </svg>
);
export default SvgAdCircle;
