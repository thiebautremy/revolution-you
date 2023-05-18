import "../styles/global.scss";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Head from "next/head";
import Page from "@/components/Page/Page";
import { NextPage } from "next";

const components = {
  // page: Page,
};
const token = process.env.NEXT_PUBLIC_STORYBLOK_TOKEN;
storyblokInit({
  accessToken: token,
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
