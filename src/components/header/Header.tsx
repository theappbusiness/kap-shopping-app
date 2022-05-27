import { useState } from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import { SearchInput } from '../search';
import { CartList } from '../cart-list';
import { ReactComponent as Cart } from '../../assets/icons/Iconcart.svg';
import { ReactComponent as Like } from '../../assets/icons/Iconsaved.svg';
import { ReactComponent as Menu } from '../../assets/icons/Iconmenu.svg';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.Neutral20};
  padding: ${({ theme }) => theme.sizes.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-family: 'Koulen';
    font-size: 38px;
    text-shadow: 1px 0px ${({ theme }) => theme.colors.Orange60};
    letter-spacing: 0.42px;
  }
  .greeting {
    display: inline;
    padding: ${({ theme }) => theme.sizes.spacing.md};
    font-size: ${({ theme }) => theme.sizes.fonts.md};
    font-weight: normal;
  }
  .icon-logo {
    cursor: pointer;
    margin: ${({ theme }) => theme.sizes.spacing.md};
  }
  .icon-logo:hover {
    filter: opacity(0.7);
  }
`;

const StyledIconDiv = styled.div`
  display: flex;
  align-items: center;
`;

type HeaderIcons = {
  search: boolean;
  cart: boolean;
};

export const Header: React.FC = () => {
  const [searchIsActive, setSearchIsActive] = useState<boolean>(false);
  const { user } = useAuth0();

  const [activeIcons, setActiveIcons] = useState<HeaderIcons>({
    search: false,
    cart: false,
  });

  return (
    <HeaderContainer data-testid="header">
      <StyledHeader>
        <Menu data-testid="menu-icon" className="icon-logo"></Menu>
        <h1>JUNO</h1>
        <StyledIconDiv>
          {user && <h4 className="greeting">Hello, {user.given_name}!</h4>}
          <Like data-testid="like-icon" className="icon-logo" />
          <Cart data-testid="cart-icon" className="icon-logo" />
        </StyledIconDiv>
      </StyledHeader>
      {activeIcons.search && <SearchInput />}
      {activeIcons.cart && <CartList />}
    </HeaderContainer>
  );
};
