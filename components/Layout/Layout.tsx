import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useTranslation } from "react-i18next";

interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <h1>{t("home_page.title")}</h1>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
