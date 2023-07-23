import Head from "next/head";
import "@src/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta http-equiv="Content-Language" content="en" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Danny D Cahyono" />
        <meta name="robots" content="all" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
