import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { ReactNode } from "react"
import { Container, HyperLink } from "./styles"

interface MenuLinkProps {
  to: string;
  onClick?: () => void;
  children?: ReactNode;
}

export const MenuButton = ({ to, onClick, children }: MenuLinkProps) => {
  const { pathname } = useRouter();
  const isActive = pathname === to ? 1 : 0;

  return <Container isActive={isActive} onClick={onClick}>
    <Link href={to} passHref>
      <HyperLink>{children}</HyperLink>
    </Link>
  </Container>;
};