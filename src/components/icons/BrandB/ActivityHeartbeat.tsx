import * as React from "react";
import type { SVGProps } from "react";
const SvgActivityHeartbeat = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M3 12h4.5L9 6l4 12 2-9 1.5 3H21" />
  </svg>
);
export default SvgActivityHeartbeat;
