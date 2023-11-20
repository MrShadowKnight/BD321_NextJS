import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
// layout
import Layout from "@/layouts";
// redux
import { Provider } from "react-redux";
import { store } from "../store";
import { useDispatch } from "react-redux";
// import { addDataFromLS } from "@/store/features/cart";

export default function App({ Component, pageProps }: AppProps) {
  // setting redux
  useEffect(() => {
    console.log("test_____");
  });
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
