import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import { AuthenticationButton } from '../../auth/AuthenticationButton';


const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.sizes.spacing.lg};
  display: flex;
  justify-content: space-between;
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
`;
export const Header: React.FC = () => {
  const { user } = useAuth0();

  return (
    <HeaderContainer data-testid="header">
      <i className="fa-solid fa-bars fa-1x" data-testid="hamburger-icon"></i>
      <h1>Shoply</h1>
      <div>
        {user && <h4 className="greeting">Hello {user.name}!</h4>}
        <AuthenticationButton />
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
