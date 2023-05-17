import { LanguageType } from "@/types/types";
import Container from "../Container/Container";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface LayoutProps extends LanguageType {
  children: any;
  blok: any;
}

const Layout: React.FC<LayoutProps> = ({ blok, locales, locale, children }) => {
  console.log(
    blok.body.find((item: { component: string }) => item.component === "Header")
  );
  const getContentForComponent = (strComponent: string) => {
    return blok.body.find(
      (item: { component: string }) => item.component === strComponent
    );
  };
  return (
    <Container isBig={true}>
      <Header
        content={...getContentForComponent("Header")}
        locales={locales}
        locale={locale}
      />
      {children}
      <Footer content={...getContentForComponent("Footer")} />
    </Container>
  );
};

export default Layout;
