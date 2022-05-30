import styled from 'styled-components';
import { useIntl, IntlProvider } from 'react-intl';

const ProductPriceContainer = styled.p`
  font-size: ${({ theme }) => theme.sizes.fonts.sm};
  font-weight: 300;
  margin-bottom: ${({ theme }) => theme.sizes.spacing.md};
`;

type PriceLocale = 'en-GB' | 'en-US' | 'fr-FR' | 'pt-PT';

const Price: React.FC<{ price: number }> = ({ price }) => {
  const intl = useIntl();
  let currencyType;
  let currencyLocale: PriceLocale = 'en-GB';

  if (intl.locale.slice(0, 2) === 'pt' || intl.locale.slice(0, 2) === 'fr') {
    currencyType = 'EUR';
    currencyLocale = intl.locale.slice(0, 2) === 'pt' ? 'pt-PT' : 'fr-FR';
  } else if (intl.locale === 'en-US') {
    currencyType = 'USD';
    currencyLocale = 'en-US';
  } else {
    currencyType = 'GBP';
  }

  return (
    <>
      {price.toLocaleString(currencyLocale, {
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
