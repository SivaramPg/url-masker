import { createGlobalStyle, ThemeProvider } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @font-face {
    font-family: 'Wotfard';
    src: url('/wotfard-regular-webfont.eot');
    src: url('/wotfard-regular-webfont.eot?#iefix') format('embedded-opentype'),
    url('/wotfard-regular-webfont.ttf') format('truetype'),
    url('/wotfard-regular-webfont.woff2') format('woff2');
  }

  body {
    box-sizing: border-box;
    font-family: 'wotfard', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const theme = {};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
