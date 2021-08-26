import { HeaderLink } from '../HeaderLink';
import { Container } from './styles';
import { HiMenu, HiOutlineDocument, HiOutlineHome, HiOutlineNewspaper } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';
import { useState } from 'react';
import { MenuButton } from '../MenuButton';

export const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleToggleMenuVisibility = () => {
    setIsMenuVisible(prevState => !prevState);
  };

  return (
    <Container>
      <Image src='/images/logo.svg' alt='waugustoaf' width={500} height={500} />

      <nav id='extended'>
        <HeaderLink to='/'>Início</HeaderLink>
        <HeaderLink to='/portfolio'>Portfólio</HeaderLink>
        <HeaderLink to='/blog'>Blog</HeaderLink>
      </nav>

      <nav id='compiled'>
        <button type='button' onClick={handleToggleMenuVisibility}>
          <HiMenu />
        </button>
      </nav>

      {isMenuVisible && (
        <menu>
          <span onClick={handleToggleMenuVisibility} />
          <div onClick={() => {}}>
            <button
              type='button'
              id='close'
              onClick={handleToggleMenuVisibility}
            >
              <IoMdClose />
            </button>
            <MenuButton to='/' onClick={handleToggleMenuVisibility}>
              <HiOutlineHome />
              Início
            </MenuButton>
            <MenuButton to='/portfolio' onClick={handleToggleMenuVisibility}>
              <HiOutlineDocument />
              Portfólio
            </MenuButton>
            <MenuButton to='/blog' onClick={handleToggleMenuVisibility}>
              <HiOutlineNewspaper />
              Blog
            </MenuButton>
          </div>
        </menu>
      )}
    </Container>
  );
};
