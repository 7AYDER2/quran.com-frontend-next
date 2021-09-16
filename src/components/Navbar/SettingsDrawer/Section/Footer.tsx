import classNames from 'classnames';
import React from 'react';
import styles from './Footer.module.scss';

const Footer = ({ children, visible = true }) => (
  <div
    className={classNames(styles.footer, {
      [styles.invisible]: !visible,
    })}
  >
    {children}
  </div>
);

export default Footer;
