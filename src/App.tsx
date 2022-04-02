import { TFunction } from "i18next";
import WithTranslation from "./WithTranslation";

type AppProps = {
  t: TFunction;
};

const App = ({ t }: AppProps) => {
  return <div className="App">{t("hello")}</div>;
};

export default WithTranslation(App);
