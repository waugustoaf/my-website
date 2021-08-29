import { Container, CustomButton } from './styles';
import { CgBrowser } from 'react-icons/cg';
import { AiOutlineMobile } from 'react-icons/ai';
import { FaServer } from 'react-icons/fa';
import { Card } from './Card';
import { useEffect, useState } from 'react';
import { TechDTO } from '../../dtos/TechDTO';
import { useTechnology } from '../../hooks/technology';

interface TechListProps {
  technologies: TechDTO[];
}

export const TechsList = ({ technologies }: TechListProps) => {
  const [currentTechs, setCurrentTechs] = useState<TechDTO[]>([]);
  const [currentTechName, setCurrentTechName] = useState<
    'web' | 'mobile' | 'backend'
  >('web');

  useEffect(() => {
    setCurrentTechs(
      technologies.filter(technology => technology.type === currentTechName),
    );
  }, [currentTechName, technologies]);

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
        {currentTechs.map(tech => (
          <Card key={tech.id} tech={tech} />
        ))}
      </div>
    </Container>
  );
};
