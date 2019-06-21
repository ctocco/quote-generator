import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <a
            href="https://github.com/ctocco/quote-generator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={styles.siteAuthorName}>Site made by Claudio Tocco</p>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Header;
