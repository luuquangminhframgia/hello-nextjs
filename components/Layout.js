import Link from 'next/link'
import { hydrate, css } from 'react-emotion';

const containerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: beige;
`;

const layoutStyle = css`
  max-width: 400px;
  margin: auto;
  background: #fff;
  padding: 25px 50px 50px;
  border-radius: 4px;
`;

export const Layout = ({children}) => (
  <div css={containerStyle}>
    <div css={layoutStyle}>
        {children} 
    </div>
  </div>
);