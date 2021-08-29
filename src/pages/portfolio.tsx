import Head from "next/head";
import { Header } from "../components/Header"
import { Container, Section, Title } from "../styles/pages/portfolio";

const Portfolio = () => {
  return (
    <Container>
      <Head>
        <title>waugustoaf | Portfólio</title>
      </Head>
      <Section>
        <Header />

        <Title>
          <h1>Portfólio</h1>
          <h2>Alguns dos meus projetos mais recentes</h2>
        </Title>
      </Section>
      <Section>
        
      </Section>
    </Container>
  );
}

export default Portfolio;