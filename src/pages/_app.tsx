<<<<<<< HEAD
import '@/styles/globals.css'
import Link from 'next/link'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
=======
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
// layout
import Layout from "@/layouts";
// redux
import { Provider } from "react-redux";
import { store } from "../store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
>>>>>>> c75980f1e1539cb3f30c36142554364a36d4d214
}
