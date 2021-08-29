import { TechDTO } from '../../../dtos/TechDTO';
import { Container } from './styles';

interface CardProps {
  tech: TechDTO;
}

export const Card = ({ tech: { name, formatted_start_date } }: CardProps) => {
  return (
    <Container data-aos='zoom-in' data-aos-duration='1200'>
      <h2>{name}</h2>
      <span>{formatted_start_date}</span>
    </Container>
  );
};
