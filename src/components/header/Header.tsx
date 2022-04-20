import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.sizes.spacing.lg};
  display: flex;
  justify-content: space-between;
  h1 {
    font-weight: lighter;
    font-size: ${({ theme }) => theme.sizes.fonts.xl};
  }
  .fa-bars {
    cursor: pointer;
  }
  .fa-bag-shopping:hover,
  .fa-magnifying-glass:hover,
  .fa-bars:hover {
    filter: opacity(0.7);
  }
  .fa-magnifying-glass {
    cursor: pointer;
    margin-left: 5px;
  }
  .fa-bag-shopping {
    cursor: pointer;
  }
`;
const Header = () => {
  return (
    <HeaderContainer data-testid="header">
      <i className="fa-solid fa-bars fa-2x" data-testid="hamburger-icon"></i>
      <h1>Shoply</h1>
      <div>
        <i
          className="fa-solid fa-bag-shopping fa-2x"
          data-testid="basket-icon"
        ></i>
        <i
          className="fa-solid fa-magnifying-glass fa-2x"
          data-testid="search-icon"
        ></i>
      </div>
    </HeaderContainer>
  );
};

export default Header;
