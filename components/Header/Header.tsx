import { useRouter } from "next/router";
import { LanguageType } from "@/types/types";
import Container from "../Container/Container";

interface HeaderProps extends LanguageType {
  blok: {
    title: string;
    description: string;
  };
}

const Header: React.FC<HeaderProps> = ({ blok, locales, locale }) => {
  const router = useRouter();
  const changeLocale = (loc: string) => {
    router.push(router.asPath, router.asPath, { locale: loc });
  };
  return (
    <header>
      <Container isBig={true}>
        <h2>{blok.title}</h2>
        <h3>{blok.description}</h3>
        {locales.map((loc) => (
          <span
            key={loc}
            onClick={() => changeLocale(loc)}
            className={`block px-4 py-1 md:p-2 rounded-lg lg:px-4 cursor-pointer ${
              locale === loc ? "bg-black text-white" : ""
            }`}
          >
            {loc}
          </span>
        ))}
      </Container>
    </header>
  );
};

export default Header;
