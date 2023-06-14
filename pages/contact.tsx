import { GetStaticProps, NextPage } from "next";
import Layout from "@/components/Layout/Layout";
import ContactForm from "@/components/ContactForm/ContactForm";
import Head from "next/head";

interface ContactProps {}

const Contact: NextPage<ContactProps> = () => {
  return (
    <>
      <Head>
        <title>Revolution You - Contact</title>
      </Head>
      <Layout title={"contact.title"}>
        <ContactForm />
      </Layout>
    </>
  );
};

export default Contact;
