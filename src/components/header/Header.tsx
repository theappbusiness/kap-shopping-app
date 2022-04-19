import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #bababa;
  display: flex;
  justify-content: center;
  padding: 10px;
  h1 {
    font-weight: lighter;
  }
`;
const Header = () => {
  return (
    <HeaderContainer>
      <h1>Shoply</h1>
    </HeaderContainer>
  );
};

export default Header;
