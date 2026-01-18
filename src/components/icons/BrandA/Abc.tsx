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
            <path d="M3 16v-6a2 2 0 1 1 4 0v6M3 13h4M10 8v6a2 2 0 1 0 4 0v-1a2 2 0 1 0-4 0v1M20.732 12A2 2 0 0 0 17 13v1a2 2 0 0 0 3.726 1.01" />
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
const SvgAbc = (props: IconProps) => <StyledIcon {...props} />;
export default SvgAbc;
