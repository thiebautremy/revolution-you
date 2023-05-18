import { LanguageType } from "@/types/types";
import Container from "../Container/Container";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface LayoutProps extends LanguageType {
  children: any;
  content: any;
}

const Layout: React.FC<LayoutProps> = ({
  content,
  locales,
  locale,
  children,
}) => {
  const getContentForComponent = (strComponent: string) => {
    return content.body.find(
      (item: { component: string }) => item.component === strComponent
    );
  };

  return (
    <>
      <Header
        content={...getContentForComponent("Header")}
        locales={locales}
        locale={locale}
      />
      <h1>{content.title}</h1>
      {children}
      <Footer content={...getContentForComponent("Footer")} />
    </>
  );
};

export default Layout;
