import { ReactNode } from "react";
import styles from "./Container.module.scss";

interface ContainerProps {
  isBig: boolean;
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ isBig, children }) => {
  return (
    <div className={isBig ? styles.isBig : styles.isSmall}>{children}</div>
  );
};

export default Container;
