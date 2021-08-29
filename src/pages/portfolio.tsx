import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectDTO } from '../dtos/ProjectDTO';
import { api } from '../services/api';
import { Cards, Container, Section, Title } from '../styles/pages/portfolio';

interface PortfolioProps {
  projects: ProjectDTO[];
}

const Portfolio = ({ projects }: PortfolioProps) => {
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
      <Cards>
        {projects.map(project => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </Cards>
      <Footer />
    </Container>
  );
};

export default Portfolio;

export const getStaticProps: GetStaticProps<PortfolioProps> = async () => {
  const projects = (await api.get('/projects')).data;

  return {
    props: {
      projects,
    },
    revalidate: 60 * 60 * 8, // 8 hours
  };
};
