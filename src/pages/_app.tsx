/*
 * @Author: kingford
 * @Date: 2023-03-19 01:30:40
 * @LastEditTime: 2023-03-19 01:31:04
 */
import "@/styles/variables.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
