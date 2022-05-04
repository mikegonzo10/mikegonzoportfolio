const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>
      <p> I am a aspiring Frontend/Web/Software developer who love to create projects</p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
