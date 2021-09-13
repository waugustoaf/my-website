import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Container, Section } from '../styles/pages/blog';

const Blog = () => {
  return (
    <Container>
      <Head>
        <title>waugustoaf | Início</title>
      </Head>
      <Section>
        <Header />
      </Section>
      <hgroup>
        <h1>Em breve!</h1>
      </hgroup>
      <Footer goToTopButtonHidden={1} />
    </Container>
  );
};

export default Blog;
