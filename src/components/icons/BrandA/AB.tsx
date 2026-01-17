import * as React from "react";
import type { SVGProps } from "react";
const SvgAB = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M3 16v-5.5a2.5 2.5 0 0 1 5 0V16m0-4H3M12 6v12M16 16V8h3a2 2 0 0 1 0 4h-3m3 0a2 2 0 0 1 0 4h-3" />
  </svg>
);
export default SvgAB;
