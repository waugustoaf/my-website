import Image from 'next/image';
import { FaArrowUp } from 'react-icons/fa';
import { Container } from './styles';

export const Footer = () => {
  const isBrowser: boolean = typeof window !== 'undefined';

  const goToId = (id: string) => {
    if (!isBrowser) return;

    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container>
      <Image src='/images/logo.svg' alt='waugustoaf' width={500} height={500} />

      <p>
        Obrigado por chegar até aqui! <span>Isso foi tudo.</span>
      </p>

      <button type='button' onClick={() => goToId('section-one')}>
        Voltar ao topo
        <FaArrowUp />
      </button>
    </Container>
  );
};
