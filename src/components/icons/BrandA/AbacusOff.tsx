import * as React from "react";
import type { SVGProps } from "react";
import { styled } from "@mui/material/styles"; // 1. 型定義: SVGProps を継承して title 関連を追加
interface IconProps extends SVGProps<SVGSVGElement> {
  title?: string;
  titleId?: string;
} // 2. 素の SVG コンポーネント
// forwardRef を使い、MUI の Tooltip などが動作するようにします
const RawIcon = React.forwardRef(
  ({ title, titleId, ...props }: IconProps, ref: React.Ref<SVGSVGElement>) => (
    <svg
      ref={ref}
      aria-labelledby={titleId}
      {...props}
      width="1em"
      height="1em"
    >
      {title ? <title id={titleId}>{title}</title> : null}
      {
        (
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
            <path d="M5 5v16M19 21v-2m0-4V3M5 7h2m4 0h8M5 15h10M8 13v4M11 13v4M16 16v1M14 5v4M11 5v2M8 8v1M3 21h18M3 3l18 18" />
          </svg>
        ).props.children
      }
    </svg>
  )
); // 3. Styled でラッピング
const StyledIcon = styled(RawIcon)(({ theme }) => ({
  display: "inline-block",
  flexShrink: 0,
  width: "1em",
  height: "1em",
  fill: "currentColor",
  // 必要に応じて MUI らしいデフォルトスタイルを追加
  fontSize: "1.5rem",
})); // 4. エクスポート用コンポーネント
const SvgAbacusOff = (props: IconProps) => <StyledIcon {...props} />;
export default SvgAbacusOff;
