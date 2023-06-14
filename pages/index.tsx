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
const databaseId = process.env.NEXT_PUBLIC_NOTION_DB_ID as string;

const Home: NextPage<HomePropsType> = ({ videosData }) => {
  console.log(videosData);
  const [videosState, setVideosState] = useState<VideoProps[]>();

  useEffect(() => {
    setVideosState(videosData);
  }, [videosData]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Revolution You</title>
      </Head>
      <Layout>
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

  const response = await notion.databases.query({
    database_id: databaseId,
  });

  return {
    props: {
      videosData: response.results,
    },
  };
};
