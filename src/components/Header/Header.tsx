import { type ReactNode } from 'react';
import styles from './Header.module.css';

type Props = {
  logo: ReactNode;
  title: string;
  rightSide?: ReactNode;
};

export const Header = ({ logo, title, rightSide }: Props) => {
  return (
    <header className={styles.Header}>
      <div className={styles.Header__left}>
        <div className={styles.Header__logo}>{logo}</div>
        <h1 className={styles.Header__title}>{title}</h1>
      </div>
      {rightSide && (
        <div className={styles.Header__right}>
          {rightSide}
        </div>
      )}
    </header>
  );
};