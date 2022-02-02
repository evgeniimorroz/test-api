import React from 'react';
import s from './Header.module.scss';
import classNames from 'classnames';

const Header = () => {
  return (
    <div className={s.header}>
      <nav className={classNames(s.nav, 'container')}>
        <ul className={s.nav__list}>
          <li className={s.nav__item}>
            <a href='#!' className={s.nav__link}>
              Все продукты
            </a>
          </li>
          <li className={s.nav__item}>
            <a href='#!' className={s.nav__link}>
              Ягоды
            </a>
          </li>
          <li className={s.nav__item}>
            <a href='#!' className={s.nav__link}>
              Суперфуд
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
