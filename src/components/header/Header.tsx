import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #e4e4ee;
  display: flex;
  justify-content: center;
  padding: 10px;
  h1 {
    font-weight: lighter;
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
`;
const Header = () => {
  return (
    <HeaderContainer data-testid="header">
      <h1>Shoply</h1>
      <i className="fa-solid fa-bars fa-2x" data-testid="hamburger-icon"></i>
      <i className="fa-solid fa-magnifying-glass fa-2x"></i>
    </HeaderContainer>
  );
};

export default Header;
