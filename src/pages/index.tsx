import type { GetStaticProps, NextPage } from 'next';

const Home: NextPage = () => {
  return <h1>Home</h1>;
};

export const getStaticProps: GetStaticProps = ctx => {
  return {
    redirect: {
      destination: '/survey',
      permanent: true,
    },
  };
};

export default Home;
