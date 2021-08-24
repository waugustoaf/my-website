import { HeaderLink } from '../HeaderLink';
import { Container } from './styles';
import Image from 'next/image';

export const Header = () => {
  return (
    <Container>
      <Image
        src='/images/logo.svg'
        alt='waugustoaf'
        width={500}
        height={500}
      />

      <nav>
        <HeaderLink to='/'>Serviços</HeaderLink>
        <HeaderLink to='/portfolio'>Portfólio</HeaderLink>
        <HeaderLink to='/blog'>Blog</HeaderLink>
      </nav>
    </Container>
  );
};
