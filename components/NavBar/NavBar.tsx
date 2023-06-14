import styles from "./NavBar.module.scss";
import cx from "classnames";
import fr from "../../public/assets/fr.png";
import en from "../../public/assets/en.png";
import Image from "next/image";
import { useAppContext } from "../../context/appContext";
import logo from "../../public/assets/Logo.png";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const locales = [
    { id: 1, language: "fr", src: fr },
    { id: 2, language: "en", src: en },
  ];
  const { appContext, setAppContext } = useAppContext();
  const { t } = useTranslation();

  return (
    <ul className={styles.navList}>
      <li className={styles.navItem}>{t("navBar.home")}</li>
      <li className={styles.navItem}>{t("navBar.blog")}</li>
      <li className={cx(styles.logoContainer, styles.navItem)}>
        <Image
          src={logo}
          alt="Logo Revolution You"
          loading="lazy"
          fill
          style={{ objectFit: "cover" }}
        />
      </li>
      <li className={styles.navItem}>{t("navBar.contact")}</li>
      <li className={cx(styles.navItem, styles.languages)}>
        {locales.map((loc) => (
          <div
            className={cx(
              styles.imageContainer,
              appContext.language !== loc.language
                ? styles.languageNotActive
                : null
            )}
            key={loc.id}
            onClick={() => {
              setAppContext({ language: loc.language }),
                i18next.changeLanguage(
                  loc.language === "fr" ? "fr-FR" : "en-GB"
                );
            }}
          >
            <Image
              src={loc.language === "fr" ? fr : en}
              alt={"french flag"}
              loading="lazy"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </li>
    </ul>
  );
};

export default NavBar;
