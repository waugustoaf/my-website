import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { ReactNode } from 'react';
import { Container, HyperLink } from './styles';

interface HeaderLinkProps {
  to: string;
  children?: ReactNode;
}

export const HeaderLink = ({ to, children }: HeaderLinkProps) => {
  const { pathname } = useRouter();
  const isActive = pathname === to ? 1 : 0;

  return (
    <Container isActive={isActive}>
      <Link href={to} passHref>
        <HyperLink isActive={isActive}>{children}</HyperLink>
      </Link>
    </Container>
  );
};
