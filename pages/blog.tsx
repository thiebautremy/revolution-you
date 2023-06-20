import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { NextPage, GetStaticProps } from "next";
import Layout from "@/components/Layout/Layout";
import { Client } from "@notionhq/client";
import ArticlesContainer from "@/components/Articles/ArticlesContainer";

interface HomePropsType {
  articlesData: any;
}

const notionToken = process.env.NEXT_PUBLIC_NOTION_TOKEN;
const articlesDatabaseId = process.env
  .NEXT_PUBLIC_NOTION_ARTICLES_DB_ID as string;

const Home: NextPage<HomePropsType> = ({ articlesData }) => {
  const [articlesState, setArticlesState] = useState();

  useEffect(() => {
    setArticlesState(articlesData);
  }, [articlesData]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Revolution You - Blog</title>
      </Head>
      <Layout title={"blog.title"}>
        <main>
          <ArticlesContainer articles={articlesState} />
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

  const articlesRes = await notion.databases.query({
    database_id: articlesDatabaseId,
  });

  return {
    props: {
      articlesData: articlesRes.results,
    },
  };
};
