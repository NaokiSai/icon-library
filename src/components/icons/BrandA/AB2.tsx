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
            <path d="M16 21h3c.81 0 1.48-.67 1.48-1.48l.02-.02c0-.82-.69-1.5-1.5-1.5h-3zM16 15h2.5c.84-.01 1.5.66 1.5 1.5s-.66 1.5-1.5 1.5H16zM4 9V5c0-1.036.895-2 2-2s2 .964 2 2v4M2.99 11.98a9 9 0 0 0 9 9m9-9a9 9 0 0 0-9-9M8 7H4" />
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
const SvgAB2 = (props: IconProps) => <StyledIcon {...props} />;
export default SvgAB2;
