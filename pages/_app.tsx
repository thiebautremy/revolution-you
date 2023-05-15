import "../styles/global.scss";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Head from "next/head";
import Page from "../components/Page";
import { NextPage } from "next";
import Header from "@/components/Header/Header";
import Video from "@/components/Video/Video";

const components = {
  page: Page,
  Header,
  Video,
};

storyblokInit({
  accessToken: "nkU6uknIvowM1wHRVSUdDwtt",
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
  components,
});
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
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default Application;
