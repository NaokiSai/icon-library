// template.cjs
const template = (variables, { tpl }) => {
  return tpl`
${variables.imports};
import { styled } from '@mui/material/styles';

// 1. 型定義: SVGProps を継承して title 関連を追加
interface IconProps extends SVGProps<SVGSVGElement> {
  title?: string;
  titleId?: string;
}

// 2. 素の SVG コンポーネント
// forwardRef を使い、MUI の Tooltip などが動作するようにします
const RawIcon = React.forwardRef(({ title, titleId, ...props }: IconProps, ref: React.Ref<SVGSVGElement>) => (
  <svg
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    {${variables.jsx}.props.children}
  </svg>
));

// 3. Styled でラッピング
const StyledIcon = styled(RawIcon)(({ theme }) => ({
  display: 'inline-block',
  flexShrink: 0,
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  // 必要に応じて MUI らしいデフォルトスタイルを追加
  fontSize: '1.5rem', 
}));

// 4. エクスポート用コンポーネント
const ${variables.componentName} = (props: IconProps) => <StyledIcon {...props} />;

${variables.exports};
`;
};

module.exports = template;