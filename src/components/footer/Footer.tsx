import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: auto;
  background-color: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.sizes.spacing.sm};

  & i {
    font-size: ${({ theme }) => theme.sizes.fonts.xl};
  }

  & .footer-i-middle {
    margin-left: ${({ theme }) => theme.sizes.spacing.sm};
    margin-right: ${({ theme }) => theme.sizes.spacing.sm};
  }
`;

const Footer = () => {
  return (
    <FooterContainer data-testid="footer">
      <i className="fa-brands fa-twitter" data-testid="social-media"></i>
      <i
        className="fa-brands fa-facebook footer-i-middle"
        data-testid="social-media"
      ></i>
      <i className="fa-brands fa-instagram" data-testid="social-media"></i>
    </FooterContainer>
  );
};

export default Footer;
