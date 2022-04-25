import i18next from 'i18next';
import styled from 'styled-components';
import {  SupportedLanguages } from '../../types/language';
import { Button } from '../general/button';

const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.sizes.spacing.lg};
  display: flex;
  justify-content: space-between;
  h1 {
    font-weight: lighter;
    font-size: ${({ theme }) => theme.sizes.fonts.xl};
  }
  .fa-bars,
  .fa-bag-shopping,
  .fa-magnifying-glass {
    cursor: pointer;
    font-size: ${({ theme }) => theme.sizes.fonts.xl};
  }
  .fa-bag-shopping:hover,
  .fa-magnifying-glass:hover,
  .fa-bars:hover {
    filter: opacity(0.7);
  }
  .fa-magnifying-glass {
    margin-left: ${({ theme }) => theme.sizes.spacing.md};
  }
  .lang-buttons {
    position: absolute;
    left: 7%;
    top: 1%;
    display: flex;
  }
`;
export const Header: React.FC = () => {

  const changeLanguage = (lang: SupportedLanguages) => {
    if (lang === 'en') return i18next.changeLanguage('en');
    if (lang === 'pt') return i18next.changeLanguage('pt');
    if (lang === 'fn') return i18next.changeLanguage('fn');
  };
  return (
    <HeaderContainer data-testid="header">
      <i className="fa-solid fa-bars fa-1x" data-testid="hamburger-icon"></i>
      <div className="lang-buttons">
        <Button handleClick={() => changeLanguage('en')}>En</Button>
        <Button handleClick={() => changeLanguage('pt')}>Pt</Button>
        <Button handleClick={() => changeLanguage('fn')}>Fn</Button>
      </div>
      <h1>Shoply</h1>
      <div>
        <i
          className="fa-solid fa-bag-shopping fa-1x"
          data-testid="basket-icon"
        ></i>
        <i
          className="fa-solid fa-magnifying-glass fa-1x"
          data-testid="search-icon"
        ></i>
      </div>
    </HeaderContainer>
  );
};
