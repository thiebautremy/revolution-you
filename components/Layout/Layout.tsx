import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useTranslation } from "react-i18next";

interface LayoutProps {
  children: any;
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <h1>{t(title)}</h1>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
