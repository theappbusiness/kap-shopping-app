import styled from 'styled-components';
import { useIntl, IntlProvider } from 'react-intl';

const ProductPriceContainer = styled.h4`
  font-size: ${({ theme }) => theme.sizes.fonts.sm};
  font-weight: 300;
  margin-bottom: ${({ theme }) => theme.sizes.spacing.md};
`;

const Price: React.FC<{ price: number }> = ({ price }) => {
  const intl = useIntl();
  let currencyType;

  if (intl.locale === 'en' || intl.locale === 'en-GB') {
    currencyType = 'GBP';
  } else if (intl.locale === 'en-US') {
    currencyType = 'USD';
  } else {
    currencyType = 'EUR';
  }
  return (
    <>
      {intl.formatNumber(price, {
        style: 'currency',
        currency: currencyType,
      })}
    </>
  );
};

export const ProductPrice: React.FC<{ price: number; locale: string }> = ({
  price,
  locale,
}) => {
  return (
    <ProductPriceContainer className="product-tile-price">
      <IntlProvider locale={locale} defaultLocale="en">
        <Price price={price}></Price>
      </IntlProvider>
    </ProductPriceContainer>
  );
};