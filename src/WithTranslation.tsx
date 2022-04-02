import React from "react";
import { TFunction, useTranslation } from "react-i18next";
import "./translations/i18n";

type WithTranslationProps = {
  t: TFunction;
};

const WithTranslation =
  <T extends WithTranslationProps>(Component: React.ComponentType<T>) =>
  (props: Omit<T, keyof WithTranslationProps>) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = useTranslation();

    return <Component {...(props as T)} t={t} />;
  };

export default WithTranslation;
