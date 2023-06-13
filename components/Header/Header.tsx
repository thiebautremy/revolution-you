import styles from "./Header.module.scss";
import NavBar from "../NavBar/NavBar";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <NavBar />
      <div className={styles.triangle}></div>
    </header>
  );
};

export default Header;
