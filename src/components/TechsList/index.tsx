import { useState } from 'react';
import { AiOutlineMobile } from 'react-icons/ai';
import { CgBrowser } from 'react-icons/cg';
import { FaServer } from 'react-icons/fa';
import { TechDTO } from '../../dtos/TechDTO';
import { Card } from './Card';
import { ExtraCard } from './ExtraCard';
import { Container, CustomButton } from './styles';

interface TechListProps {
  technologies: TechDTO[];
}

interface TechProps {
  main: TechDTO[];
  extras: TechDTO[];
}

interface TechsProps {
  backend: TechProps;
  web: TechProps;
  mobile: TechProps;
}

export const TechsList = ({ technologies }: TechListProps) => {
  const [techs, setTechs] = useState<TechsProps>(() => {
    const mobileTechs = technologies.filter(
      technology => technology.type === 'mobile',
    );
    const backendTechs = technologies.filter(
      technology => technology.type === 'backend',
    );
    const webTechs = technologies.filter(
      technology => technology.type === 'web',
    );

    return {
      backend: {
        main: backendTechs.slice(
          0,
          backendTechs.length < 5 ? backendTechs.length : 5,
        ),
        extras: backendTechs.slice(5, backendTechs.length),
      },
      web: {
        main: webTechs.slice(0, webTechs.length < 5 ? webTechs.length : 5),
        extras: webTechs.slice(5, webTechs.length),
      },
      mobile: {
        main: mobileTechs.slice(
          0,
          mobileTechs.length < 5 ? mobileTechs.length : 5,
        ),
        extras: mobileTechs.slice(5, mobileTechs.length),
      },
    };
  });
  const [currentTechName, setCurrentTechName] = useState<
    'web' | 'mobile' | 'backend'
  >('web');

  return (
    <Container>
      <div data-aos='fade-up'>
        <CustomButton
          type='button'
          isActive={currentTechName === 'web' ? 1 : 0}
          onClick={() => setCurrentTechName('web')}
        >
          <CgBrowser />
          <span>Web Developer</span>
        </CustomButton>
        <CustomButton
          type='button'
          isActive={currentTechName === 'mobile' ? 1 : 0}
          onClick={() => setCurrentTechName('mobile')}
        >
          <AiOutlineMobile />
          <span>Mobile Developer</span>
        </CustomButton>
        <CustomButton
          type='button'
          isActive={currentTechName === 'backend' ? 1 : 0}
          onClick={() => setCurrentTechName('backend')}
        >
          <FaServer />
          <span>Backend Developer</span>
        </CustomButton>
      </div>
      <div>
        {techs[currentTechName].main.map(tech => (
          <Card key={tech.id} tech={tech} />
        ))}
        {techs[currentTechName].extras.length > 0 && (
          <ExtraCard
            key={new Date().toString()}
            techs={techs[currentTechName].extras}
          />
        )}
      </div>
    </Container>
  );
};
