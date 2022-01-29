import React from 'react';
import s from './Header.style.scss';

const Header = () => {
  return (
    <div className={s.header}>
      <nav>
        <div className='nav-wrapper  teal darken-1'>
          <a href='#!' className='brand-logo'>
            Logo
          </a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <a href='#!'>Sass</a>
            </li>
            <li>
              <a href='#!'>Components</a>
            </li>
            <li>
              <a href='#!'>JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
