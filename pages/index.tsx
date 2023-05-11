import Head from "next/head";
import styles from "../styles/Home.module.scss";
import {
  ISbStoriesParams,
  StoryblokComponent,
  getStoryblokApi,
} from "@storyblok/react";
import variables from "../styles/_variables.module.scss";
import { NextPage, GetStaticProps } from "next";
import { LanguageType } from "@/types/types";

interface HomePropsType extends LanguageType {
  story: {
    content: {};
  };
}
export const Home: NextPage<HomePropsType> = ({
  story,
  locale,
  locales,
  defaultLocale,
}) => {
  console.log(locales);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StoryblokComponent
        blok={story.content}
        locales={locales}
        locale={locale}
        defaultLocale={defaultLocale}
      />
      <main></main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({
  locale,
  locales,
  defaultLocale,
}) => {
  // home is the default slug for the homepage in Storyblok
  let slug = "/home";

  // load the draft version
  let sbParams: string | undefined | ISbStoriesParams = {
    version: "published",
    language: locale, // or 'published'
  };

  // &language=
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      locale,
      locales,
      defaultLocale,
      story: data ? data.story : false,
    },
    revalidate: 3600, // revalidate every hour
  };
};
