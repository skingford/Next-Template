/*
 * @Author: kingford
 * @Date: 2023-03-19 01:30:40
 * @LastEditTime: 2023-03-19 02:53:37
 */
import "@/styles/variables.scss";
import type { AppProps } from "next/app";
import ErrorBoundary from "@/components/ErrorBoundary";
import ErrorMessage from "@/components/ErrorMessage";
import Loading from "@/components/Loading";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary fallback={<ErrorMessage />}>
      <>
        <Component {...pageProps} />
        <Loading />
      </>
    </ErrorBoundary>
  );
}
