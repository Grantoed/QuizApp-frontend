import "node_modules/modern-normalize/modern-normalize.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";
import { GlobalContextProvider } from "@/contexts/globalContext";

const inter = Inter({ subsets: ["latin", "cyrillic"], weight: ["400"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
      </Head>
      <GlobalContextProvider>
        <Component {...pageProps} />
      </GlobalContextProvider>
    </div>
  );
}
