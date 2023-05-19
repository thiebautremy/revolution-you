import { GetStaticProps, NextPage } from "next";
import Layout from "@/components/Layout/Layout";
import { LanguageType } from "@/types/types";
import { getStoryblokApi } from "@storyblok/react";
import ContactForm from "@/components/ContactForm/ContactForm";
import Head from "next/head";

interface ContactProps extends LanguageType {
  story: {
    content: {};
  };
}

const Contact: NextPage<ContactProps> = ({
  story,
  locale,
  locales,
  defaultLocale,
}) => {
  return (
    <>
      <Head>
        <title>Revolution You - Contact</title>
      </Head>
      <Layout
        content={story.content}
        locales={locales}
        locale={locale}
        defaultLocale={defaultLocale}
      >
        <ContactForm />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({
  locale,
  locales,
  defaultLocale,
}) => {
  const slug = "contact";

  const params = {
    language: locale,
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, params);

  return {
    props: {
      story: data ? data.story : false,
      locale,
      locales,
      defaultLocale,
    },
    revalidate: 3600,
  };
};

export default Contact;
