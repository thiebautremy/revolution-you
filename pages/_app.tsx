import "../styles/global.scss";
import Head from "next/head";
import { NextPage } from "next";
import { AppContextProvider } from "@/context/appContext";
import "../i18n/config";

interface ApplicationProps {
  Component: any;
  pageProps: {};
}
const Application: NextPage<ApplicationProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="height=device-height,width=device-width, initial-scale=1.0, minimum-scale=1.0"
        />
        <link rel="icon" type="image/png" href="/favicon/favicon.ico" />
      </Head>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </>
  );
};

export default Application;
