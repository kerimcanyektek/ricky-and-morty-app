import { FooterContainer, LogoContainer, MenuContainer, FooterCopy, FooterMenu } from '../../styles/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export function Footer() {
  return (
    <FooterContainer>
      <LogoContainer>
        <Image src="/logo.png" alt="Logo" width={150} height={84} />
        <p>Ricky and Morty&apos;nin renkli karakterlerini keşfet!</p>
      </LogoContainer>
      <MenuContainer>
        <FooterMenu>
          <h4>Bağlantılar</h4>
          <Link href="/">Ana Sayfa</Link>
          <Link href="/favorites">Favoriler</Link>
        </FooterMenu>
      </MenuContainer>
      <FooterCopy>
        Kerimcan Yektek © 2024
      </FooterCopy>
    </FooterContainer>
  );
}
