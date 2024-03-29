import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { NextPage, GetStaticProps } from "next";
import VideoContainer from "@/components/Videos/VideoContainer";
import { VideoProps } from "@/components/Videos/Video";
import Layout from "@/components/Layout/Layout";
import { Client } from "@notionhq/client";

interface HomePropsType {
  videosData: VideoProps[];
}

const notionToken = process.env.NEXT_PUBLIC_NOTION_TOKEN;
const videosDatabaseId = process.env.NEXT_PUBLIC_NOTION_VIDEOS_DB_ID as string;

const Home: NextPage<HomePropsType> = ({ videosData }) => {
  const [videosState, setVideosState] = useState<VideoProps[]>();

  useEffect(() => {
    setVideosState(videosData);
  }, [videosData]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Revolution You</title>
      </Head>
      <Layout title={"homePage.title"}>
        <main>
          <VideoContainer videos={videosState} />
        </main>
      </Layout>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const notion = new Client({
    auth: notionToken,
  });

  const videosRes = await notion.databases.query({
    database_id: videosDatabaseId,
  });

  return {
    props: {
      videosData: videosRes.results,
    },
  };
};
