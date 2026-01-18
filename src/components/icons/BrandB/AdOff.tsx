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
            <path d="M9 5h10a2 2 0 0 1 2 2v10m-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" />
            <path d="M7 15v-4a2 2 0 0 1 2-2m2 2v4M7 13h4M17 9v4M16.115 12.131c.33.149.595.412.747.74M3 3l18 18" />
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
const SvgAdOff = (props: IconProps) => <StyledIcon {...props} />;
export default SvgAdOff;
