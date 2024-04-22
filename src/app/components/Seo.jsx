import Head from "next/head";

const Seo = ({ pageTitle, pageDescription }) => (
    <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
    </Head>
);

export default Seo;