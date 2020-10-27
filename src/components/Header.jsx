import React from 'react';
import logo from '../assets/img/logo.png';
import switcher from '../assets/img/sun.svg';
import search from '../assets/img/loupe.svg';
import settings from '../assets/img/settings.svg';

function Header() {
  return (
    <div className="header">
      <div className="header__pre">
        <h1>Футбол прямые трансляции, результаты футбол онлайн, счет матчей livescore</h1>
      </div>
      <div className="header__main">
        <div className="header__logo">
          <img src={logo} alt="Myscorelogo" width="38" />
          <h1>Flashscore.kz</h1>
        </div>
        <div className="header__edit">
          <button>
            <img src={switcher} alt="Switcher" width="20" />
          </button>
          <button>
            <img src={search} alt="Search" width="20" />
          </button>
          <button>
            <img src={settings} alt="Settings" width="20" />
          </button>
        </div>
        <div className="header__auth">
          <button>
            <h1>Вход</h1>
          </button>
          <button>
            <h1>Регистрация</h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
