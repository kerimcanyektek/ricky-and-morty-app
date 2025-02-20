import styled from 'styled-components';
import { design } from '../../styles/globals';

export const FooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: ${design.colors.black};
  color: ${design.colors.white};
  padding: 40px 200px;
  gap: 24px;
`;

export const LogoContainer = styled.div`
  flex: 1;
  min-width: 180px;

  p {
    margin-top: 6px;
    font-size: ${design.fontSizes.sm};
    max-width: 200px;
    line-height: 1.4;
  }
`;

export const MenuContainer = styled.nav`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;

export const FooterMenu = styled.div`
  text-align: left;

  h4 {
    margin-bottom: 10px;
    color: ${design.colors.white};
    font-size: ${design.fontSizes.md};
  }

  a {
    color: ${design.colors.white};
    text-decoration: none;
    display: block;
    margin-bottom: 5px;
    font-size: ${design.fontSizes.sm};
    transition: color 0.3s ease-in-out;

    &:hover {
      color: ${design.colors.orange};
      text-decoration: underline;
    }
  }
`;

export const SocialContainer = styled.div`
  flex: 1;
  text-align: right;

  h4 {
    margin-bottom: 10px;
    font-size: ${design.fontSizes.md};
  }

  div {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
  }

  a {
    color: ${design.colors.white};
    font-size: 18px;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: ${design.colors.orange};
    }
  }
`;

export const FooterCopy = styled.p`
  width: 100%;
  text-align: center;
  font-size: ${design.fontSizes.sm};
  margin-top: 15px; 
  border-top: 1px solid ${design.colors.gray300};
  padding-top: 12px;
`;
