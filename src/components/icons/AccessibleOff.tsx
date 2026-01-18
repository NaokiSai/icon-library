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
            <path d="m10 16.5 2-3 2 3m-2-3V12m2.627-1.376L15 10.5m-6 0 2.231.744" />
            <path d="M20.042 16.045A9 9 0 0 0 7.955 3.958M5.637 5.635a9 9 0 1 0 12.725 12.73" />
            <path d="M12 8a.5.5 0 1 0-.5-.5M3 3l18 18" />
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
const SvgAccessibleOff = (props: IconProps) => <StyledIcon {...props} />;
export default SvgAccessibleOff;
