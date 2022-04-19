import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #e4e4ee;
  display: flex;
  justify-content: center;
  padding: 10px;
  h1 {
    font-weight: lighter;
    font-size: 25px;
  }
  .fa-bars {
    position: absolute;
    left: 2%;
    cursor: pointer;
  }
  .fa-bars:hover {
    color: #302f2f;
  }
  .fa-magnifying-glass {
    position: absolute;
    right: 2%;
    cursor: pointer;
  }
  .fa-magnifying-glass:hover {
    color: #302f2f;
  }
  .fa-bag-shopping {
    position: absolute;
    right: 12%;
    cursor: pointer;
  }
  .fa-bag-shopping:hover {
    color: #302f2f;
  }
`;
const Header = () => {
  return (
    <HeaderContainer data-testid="header">
      <h1>Shoply</h1>
      <i className="fa-solid fa-bars fa-2x" data-testid="hamburger-icon"></i>
      <i
        className="fa-solid fa-magnifying-glass fa-2x"
        data-testid="search-icon"
      ></i>
      <i
        className="fa-solid fa-bag-shopping fa-2x"
        data-testid="basket-icon"
      ></i>
    </HeaderContainer>
  );
};

export default Header;
