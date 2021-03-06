/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

import theme from "src/theme";

import "@styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <RecoilRoot>
        <Head>
          <title>Kaffi Sel</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&family=Neuton:wght@200;400;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <Component {...pageProps} />
      </RecoilRoot>
    </ChakraProvider>
  );
}
export default MyApp;
