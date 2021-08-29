import Aos from 'aos';
import 'aos/dist/aos.css';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import {
  FaArrowDown,
  FaGithub,
  FaInstagram,
  FaLink,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { SocialMediaButton } from '../components/SocialMediaButton';
import { TechsList } from '../components/TechsList';
import { TechDTO } from '../dtos/TechDTO';
import { api } from '../services/api';
import {
  Background,
  Contacts,
  Container,
  History,
  MediasAndHistory,
  Presentation,
  Section,
} from '../styles/pages/home';

interface HomeProps {
  technologies: TechDTO[];
}

const Home = ({ technologies }: HomeProps) => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  });

  const isBrowser: boolean = typeof window !== 'undefined';

  const goToId = (id: string) => {
    if (!isBrowser) return;

    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>waugustoaf | Início</title>
      </Head>
      <Container>
        <Background>
          <Section id='section-one' type='primary'>
            <Header />

            <Presentation>
              <span>
                Augusto <br />
                Fernandes.
              </span>

              <div>
                <span>– Apresentação</span>
                <h2>
                  Desenvolvedor FrontEnd Web e Mobile | JavaScript & TypeScript
                </h2>
                <p>
                  Eu desenvolvo e personalizo coisas simples e bonitas com
                  códigos, e amo o que eu faço!
                </p>
              </div>
            </Presentation>
            <MediasAndHistory>
              <div>
                <SocialMediaButton
                  icon={FaLinkedinIn}
                  link='https://www.linkedin.com/in/waugustoaf/'
                  name='LinkedIn'
                />
                <SocialMediaButton
                  icon={FaInstagram}
                  link='https://www.instagram.com/waltherfernandes'
                  name='Instagram'
                />
                <SocialMediaButton
                  icon={FaGithub}
                  link='https://www.github.com/waugustoaf'
                  name='GitHub'
                />
                <SocialMediaButton
                  icon={HiMail}
                  link='mailto:waugustoaf@gmail.com'
                  name='E-mail'
                />
              </div>

              <span>
                <button type='button' onClick={() => goToId('section-two')}>
                  Minha história
                  <FaArrowDown />
                </button>
              </span>
            </MediasAndHistory>
          </Section>
        </Background>

        <Background
          secondary={1}
          id='section-two'
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Section type='secondary'>
            <Contacts data-aos='fade-right'>
              <span>– Contato</span>
              <div>
                <h2>Para quaisquer dúvidas &amp; serviços</h2>
                <p>
                  Caso seja de sua preferência não me contatar pelas redes
                  sociais da sessão acima, também poderá me encontrar no email
                  abaixo.
                </p>
              </div>
              <a href='mailto:waugustoaf@gmail.com'>
                waugustoaf@gmail.com
                <FaLink />
              </a>
            </Contacts>
            <History data-aos='fade-left'>
              <h2>
                Um pouco da minha história e paixão por essa área maravilhosa e
                encantadora
              </h2>
              <p>
                Apaixonado pelo mundo da programação, tive meu primeiro contato
                com esse mundo aos nove anos de idade. Em 2019 retorno a esse
                mundo e de lá pra cá não larguei mais os estudos. Sou do
                interior de Minas Gerais, estudante de Desenvolvimento de
                Sistemas pelo CEFET-MG
              </p>
              <span>
                <div>
                  <p>3</p>
                  <span>
                    Anos de <br /> Experiência Pessoal
                  </span>
                </div>
                <button type='button' onClick={() => goToId('section-three')}>
                  Tecnologias
                  <FaArrowDown />
                </button>
              </span>
            </History>
          </Section>
        </Background>

        <Background>
          <Section type='secondary' id='section-three'>
            <TechsList technologies={technologies} />
          </Section>
        </Background>

        <Footer />
      </Container>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const technologies = (await api.get('/technologies')).data;

  return {
    props: {
      technologies,
    },
    revalidate: 60 * 60 * 8, // 8 hours
  };
};
