import "node_modules/modern-normalize/modern-normalize.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin", "cyrillic"], weight: ["400"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
