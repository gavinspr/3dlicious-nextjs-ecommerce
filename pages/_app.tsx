// import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { theme } from "../styles/styles";
// import { Global, css } from "@emotion/react";

// const GlobalStyles = css`
//   .js-focus-visible :focus:not([data-focus-visible-added]) {
//     outline: none;
//     box-shadow: none;
//   }
// `;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      {/* <Global styles={GlobalStyles} /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
