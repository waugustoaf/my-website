/* eslint-disable jsx-a11y/alt-text */
import { ProjectDTO } from '../../dtos/ProjectDTO';
import { Container, Image, Infos } from './styles';
import { CgBrowser } from 'react-icons/cg';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  project: ProjectDTO;
}

export const ProjectCard = ({
  project: { image_link, description, external_link, github_link, name },
}: ProjectCardProps) => {
  return (
    <Container>
      <Image src={image_link} />

      <Infos>
        <h2>{name}</h2>
        <p>{description}</p>
        <span>
          {external_link &&
            external_link !== 'https://www.waugustoaf.com.br/portfolio' && (
              <a href={external_link} target='_blank' rel='noreferrer'>
                <CgBrowser />
                Ir ao site
              </a>
            )}

          {github_link && (
            <a href={github_link} target='_blank' rel='noreferrer'>
              <FaGithub />
              Ver repositório
            </a>
          )}
        </span>
      </Infos>
    </Container>
  );
};
