import React, { useState } from 'react';
import styles from '../header/header.module.scss';
import logo from './images/logo.png';
import close from './images/close.png';
import menu from './images/menu.png';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { RouteProps } from 'react-router';
import telegram from './images/telegram.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      {window.innerWidth >= 550 ? (
        <>
          <nav className={styles.nav}>
            <ul>
            <li>Акселератор</li> <li>Выпускники</li> <li>Команда</li> <li>Мероприятия</li>
            {/* <li>
                <NavLink exact to="/accelerator" activeClassName={styles.activeLink}>Акселератор</NavLink>
            </li>
            <li>
                <NavLink exact to="/graduates" activeClassName={styles.activeLink}>Выпускники</NavLink>
            </li>
            <li>
                <NavLink exact to="/team" activeClassName={styles.activeLink}>Команда</NavLink>
            </li>
            <li>
                <NavLink exact to="/events" activeClassName={styles.activeLink}>Мероприятия</NavLink>
            </li> */}
            </ul>
          </nav>
          {/* <div className={styles.spacer} /> */}
        </>
      ) : (
        <>
          <img src={logo} alt="Логотип" className={styles.logo}/>
          <div className={styles.menu}>
          <button className={styles.menuIcon} onClick={handleMenuClick}>
            <img src={isMenuOpen ? close : menu} alt="Меню" className={styles.icon} />
          </button>
          {isMenuOpen && (
            <nav className={styles.nav}>
              <ul>
                <li><p>Акселератор</p></li>
                <hr/>
                <li>Выпускники</li>
                <hr/>
                <li>Команда</li>
                <hr/>
                <li>Мероприятия</li>
              </ul>
              <div className={styles.contact}>
                <a href="mailto:accelerator@startupdrive.ru" aria-label="E-mail: accelerator@startupdrive.ru">accelerator@startupdrive.ru</a>
                <div className={styles.flex}>
                    <img src={telegram} className={styles.telegram}/>
                    <a href="https://t.me/startupdrive">@startupdrive</a>
                </div>
              </div>
            </nav>
            
          )}
          </div>
        </>
      )}
    </header>
  );
};

export default Header;