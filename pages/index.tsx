import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { ISbStoriesParams, getStoryblokApi } from "@storyblok/react";
import { NextPage, GetStaticProps } from "next";
import { LanguageType } from "@/types/types";
import VideoContainer from "@/components/Videos/VideoContainer";
import { VideoContentType } from "@/components/Videos/Video";
import Layout from "@/components/Layout/Layout";

interface HomePropsType extends LanguageType {
  story: {
    content: {};
  };
  videos: { uuid: string; content: VideoContentType; tag_list: string[] }[];
}
export const Home: NextPage<HomePropsType> = ({
  story,
  locale,
  locales,
  defaultLocale,
  videos,
}) => {
  console.log(videos);
  return (
    <div className={styles.container}>
      <Head>
        <title>Revolution You</title>
      </Head>
      <Layout
        blok={story.content}
        locales={locales}
        locale={locale}
        defaultLocale={defaultLocale}
      >
        <main>
          <VideoContainer videos={videos} />
        </main>
      </Layout>
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

  let { data: videos } = await storyblokApi.get(`cdn/stories`, {
    content_type: "Video",
    language: locale,
  });

  return {
    props: {
      locale,
      locales,
      defaultLocale,
      story: data ? data.story : false,
      videos: videos ? videos.stories : false,
    },
    revalidate: 3600, // revalidate every hour
  };
};
