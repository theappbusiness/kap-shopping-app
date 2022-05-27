import { useState } from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import { SearchInput } from '../search';
import { CartList } from '../cart-list';
import { ReactComponent as Cart } from '../../assets/icons/cart.svg';
import { ReactComponent as Like } from '../../assets/icons/like.svg';
import { ReactComponent as Menu } from '../../assets/icons/menu.svg';
import { IconButton } from '../general/icon-button';
import { TotalCartQuantityBadge } from '../TotalCartQuantityBadge';

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
  const { user } = useAuth0();

  const [activeIcons, setActiveIcons] = useState<HeaderIcons>({
    search: false,
    cart: false,
  });

  return (
    <HeaderContainer data-testid="header">
      <StyledHeader>
        <IconButton
          Icon={Menu}
          iconWidth={48}
          data-testid="menu-icon"
          stroke={'false'}
          buttonSize="medium"
        />

        <h1>JUNO</h1>
        <StyledIconDiv>
          {user && <h4 className="greeting">Hello, {user.given_name}!</h4>}
          <IconButton
            Icon={Like}
            iconWidth={48}
            data-testid="like-icon"
            stroke={'false'}
            buttonSize="medium"
          />
          <IconButton
            Icon={Cart}
            iconWidth={48}
            data-testid="cart-icon"
            stroke={'false'}
            buttonSize="medium"
            onClick={() => {
              setActiveIcons((currActiveIcons) => {
                return { ...currActiveIcons, cart: !currActiveIcons.cart };
              });
            }}
          >
            <TotalCartQuantityBadge />
          </IconButton>
        </StyledIconDiv>
      </StyledHeader>
      {activeIcons.search && <SearchInput />}
      {activeIcons.cart && <CartList />}
    </HeaderContainer>
  );
};
