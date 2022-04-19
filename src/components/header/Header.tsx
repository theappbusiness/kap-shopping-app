import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #d6d6d6;
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
`;
const Header = () => {
  return (
    <HeaderContainer data-testid="header">
      <h1>Shoply</h1>
      <i className="fa-solid fa-bars fa-2x" data-testid="hamburger-icon"></i>
    </HeaderContainer>
  );
};

export default Header;
