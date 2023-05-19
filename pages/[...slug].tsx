import Head from "next/head";
import { getStoryblokApi } from "@storyblok/react";
import Layout from "@/components/Layout/Layout";
import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { LanguageType } from "@/types/types";

interface PagePropsType extends LanguageType {
  story: {
    content: {};
  };
}

const Page: NextPage<PagePropsType> = ({
  story,
  locale,
  locales,
  defaultLocale,
}) => {
  return (
    <>
      <Head>
        <title>Revolution You</title>
      </Head>
      <Layout
        content={story.content}
        locales={locales}
        locale={locale}
        defaultLocale={defaultLocale}
      >
        {/* <StoryblokComponent
          blok={story.content}
          locale={locale}
          locales={locales}
        /> */}
      </Layout>
    </>
  );
};

export default Page;

export const getStaticProps: GetStaticProps = async ({
  params,
  locale,
  locales,
  defaultLocale,
}) => {
  let slug = params?.slug
    ? typeof params.slug !== "string" && params.slug.join("/")
    : "home";

  let sbParams = {
    language: locale,
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      locale,
      locales,
      defaultLocale,
    },
    revalidate: 3600,
  };
};

export const getStaticPaths = async ({ locales }: any) => {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/");

  let paths: { params: { slug: any }; locale: any }[] = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }

    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");

    for (const locale of locales) {
      paths.push({ params: { slug: splittedSlug }, locale });
    }
  });

  return {
    paths: paths,
    fallback: false,
  };
};
