import Head from "next/head";
import styles from "../styles/Home.module.css";

import { StoryblokComponent, getStoryblokApi } from "@storyblok/react";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  PromiseLikeOfReactNode,
} from "react";

export default function Home(props: {
  story: {
    content: {};
    name:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | ReactFragment
      | ReactPortal
      | PromiseLikeOfReactNode
      | null
      | undefined;
  };
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>{props.story ? props.story.name : "My Site"}</h1>
      </header>
      <StoryblokComponent blok={props.story.content} />
      <main></main>
    </div>
  );
}

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "/home";

  // load the draft version
  let sbParams = {
    version: "published", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}
