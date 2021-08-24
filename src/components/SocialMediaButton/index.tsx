import { IconType } from 'react-icons';
import { Container } from './styles';

interface SocialMediaButtonProps {
  icon: IconType;
  link: string;
  name: string;
}

export const SocialMediaButton = ({
  icon: Icon,
  link,
  name,
}: SocialMediaButtonProps) => {
  return (
    <Container href={link} title={name} target='_blank'>
      <Icon />
    </Container>
  );
};
