import { useTranslation } from "react-i18next";
import "./translations/i18n";

const App = () => {
  const { t } = useTranslation();

  return <div className="App">{t("hello")}</div>;
};

export default App;
