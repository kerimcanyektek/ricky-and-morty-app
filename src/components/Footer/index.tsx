import { FooterContainer, LogoContainer, MenuContainer, FooterCopy, FooterMenu, SocialContainer } from '../../styles/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Sosyal medya ikonları için

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
          <Link href="/contact">İletişim</Link>
        </FooterMenu>
      </MenuContainer>

      <SocialContainer>
        <h4>Bizi Takip Edin</h4>
        <div>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </SocialContainer>

      <FooterCopy>
        Kerimcan Yektek © 2025 - Tüm Hakları Saklıdır.
      </FooterCopy>
    </FooterContainer>
  );
}
