import { TechDTO } from '../../../dtos/TechDTO';
import { Container } from './styles';

interface CardProps {
  tech: TechDTO;
}

export const Card = ({ tech: { time, title } }: CardProps) => {
  return (
    <Container data-aos="zoom-in" data-aos-duration="1200">
      <h2>{title}</h2>
      <span>{time}</span>
    </Container>
  );
};
