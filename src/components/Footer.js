import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as DogFooterIcon } from '../Assets/dogs-footer.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <DogFooterIcon />
      <p>
        Desenvolvido por: <strong> Jerry Macedo Castro </strong> <br />
        <a href="mailto:jerry.castro@outlook.com">Contate-me ✉</a> <br />
        <i>Alguns direitos reservados</i>
      </p>
    </footer>
  );
};

export default Footer;
