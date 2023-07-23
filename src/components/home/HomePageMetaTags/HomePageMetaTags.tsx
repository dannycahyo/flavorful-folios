import Head from "next/head";

const HomePageMetaTags = () => {
  return (
    <Head>
      <title>Flavorful Folios</title>
      <meta
        name="description"
        content="Welcome to my catering personal website. Explore our mission, portfolio and services."
      />
      <link rel="canonical" href="https://flavorful-folios.vercel.app/" />
      <meta property="og:url" content="https://flavorful-folios.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Flavorful Folios" />
      <meta
        property="og:description"
        content="Welcome to my catering personal website. Explore our mission, portfolio and services."
      />
      <meta
        property="og:image"
        content="assets/images/core-values/Food_Ingredients.jpg"
      />
    </Head>
  );
};

export { HomePageMetaTags };
