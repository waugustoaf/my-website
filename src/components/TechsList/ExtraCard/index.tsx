import { TechDTO } from '../../../dtos/TechDTO';
import { Container } from './styles';

interface ExtraCardProps {
  techs: TechDTO[];
}

export const ExtraCard = ({ techs }: ExtraCardProps) => {
  const techsTitle = techs.map(tech => tech.name);
  const techsText = techsTitle.join(', ');

  return (
    <Container data-aos='zoom-in' data-aos-duration='1200'>
      <span>{techsText}</span>
    </Container>
  );
};
