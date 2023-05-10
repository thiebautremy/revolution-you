import { storyblokInit, apiPlugin } from "@storyblok/react";
import Head from "next/head";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";

const components = {
  grid: Grid,
  teaser: Teaser,
  page: Page,
};

storyblokInit({
  accessToken: "nkU6uknIvowM1wHRVSUdDwtt",
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
  components,
});
const Application = ({ Component, pageProps }) => {
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
