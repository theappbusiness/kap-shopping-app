import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: auto;
  background-color: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.sizes.spacing.sm};
  margin-top: auto;

  & i {
    font-size: ${({ theme }) => theme.sizes.fonts.xl};
    margin: 0 ${({ theme }) => theme.sizes.spacing.sm};
  }
`;

const Footer = () => {
  return (
    <FooterContainer data-testid="footer">
      <i className="fa-brands fa-twitter" data-testid="social-media"></i>
      <i className="fa-brands fa-facebook" data-testid="social-media"></i>
      <i className="fa-brands fa-instagram" data-testid="social-media"></i>
    </FooterContainer>
  );
};

export default Footer;
