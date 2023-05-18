import styles from "./Header.module.scss";
import { useRouter } from "next/router";
import { LanguageType } from "@/types/types";
import cx from "classnames";
import fr from "../../public/assets/fr.png";
import en from "../../public/assets/en.png";
import Image from "next/image";

interface HeaderProps extends LanguageType {
  content: {
    title: string;
    description: string;
    logo: {
      alt: string;
      filename: string;
    };
  };
}

const Header: React.FC<HeaderProps> = ({ content, locales, locale }) => {
  const { title, description } = content;
  const router = useRouter();
  const changeLocale = (loc: string) => {
    router.push(router.asPath, router.asPath, { locale: loc });
  };

  return (
    <header className={styles.header}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>Accueil</li>
        <li className={styles.navItem}>Blog</li>
        <li className={cx(styles.logoContainer, styles.navItem)}>
          <Image
            src={content.logo.filename}
            alt={content.logo.alt}
            loading="lazy"
            fill
            style={{ objectFit: "cover" }}
          />
        </li>
        <li className={styles.navItem}>Contact</li>
        <li className={cx(styles.navItem, styles.languages)}>
          {locales.map((loc) => (
            <div
              className={cx(
                styles.imageContainer,
                locale !== loc ? styles.languageNotActive : null
              )}
              key={loc}
              onClick={() => changeLocale(loc)}
            >
              <Image
                src={loc === "fr" ? fr : en}
                alt={"french flag"}
                loading="lazy"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </li>
      </ul>
      <div className={styles.triangle}></div>
      <h2>{title}</h2>
      <h3>{description}</h3>
    </header>
  );
};

export default Header;
