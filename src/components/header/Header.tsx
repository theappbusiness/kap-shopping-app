import { useState } from 'react';
import styled from 'styled-components';
import { IconButton } from '../general/icon-button/IconButton';
import { SearchInput } from '../search';
import { Active } from '../../styles.d';

// import { useAuth0 } from '@auth0/auth0-react';
// import { AuthenticationButton } from '../../auth/AuthenticationButton';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.sizes.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-weight: lighter;
    font-size: ${({ theme }) => theme.sizes.fonts.xl};
  }
  .greeting {
    display: inline;
    padding: ${({ theme }) => theme.sizes.spacing.md};
    font-size: ${({ theme }) => theme.sizes.fonts.md};
    font-weight: normal;
  }
  .fa-bars,
  .fa-bag-shopping {
    cursor: pointer;
    font-size: ${({ theme }) => theme.sizes.fonts.xl};
    vertical-align: middle;
  }
  .fa-bag-shopping:hover,
  .fa-bars:hover {
    filter: opacity(0.7);
  }
`;

const StyledSearchButton = styled(IconButton)<Active>`
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.dark : 'transparent'};
  .button-icon {
    color: ${({ theme, isActive }) =>
      isActive ? theme.colors.light : theme.colors.dark};
  }
`;

export const Header: React.FC = () => {
  // const { user } = useAuth0();

  const [searchIsActive, setSearchIsActive] = useState<boolean>(false);

  return (
    <HeaderContainer data-testid="header">
      <StyledHeader>
        <i className="fa-solid fa-bars fa-1x" data-testid="hamburger-icon"></i>
        <h1>Shoply</h1>
        <div>
          {/* // TODO: Add this after serving the website via https */}
          {/* {user && <h4 className="greeting">Hello {user.name}!</h4>}
        <AuthenticationButton /> */}
          <i
            className="fa-solid fa-bag-shopping fa-1x"
            data-testid="basket-icon"
          ></i>
          <StyledSearchButton
            onClick={() => {
              setSearchIsActive((currSearchIsActive) => !currSearchIsActive);
            }}
            iconName="magnifying-glass"
            isActive={searchIsActive}
          />
        </div>
      </StyledHeader>
      {searchIsActive && <SearchInput />}
    </HeaderContainer>
  );
};
