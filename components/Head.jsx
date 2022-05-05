import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Mike Gonzalez is an avid web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="mike, mike gonzalez, mike, web developer, mike web developer, mike developer, mike stack, mike portfolio"
      />
      <meta property="og:title" content="Mike Gonzalez  Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="mikegonzoportfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Mike Gonzalez',
};
