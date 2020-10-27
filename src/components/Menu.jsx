import React from 'react';
import '../scss/components/menu.scss';
import left from '../assets/img/left.svg';
import right from '../assets/img/right.svg';
import calendar from '../assets/img/calendar.svg';

const Menu = ({ items }) => {
  return (
    <div className="menu">
      <div className="menu__list">
        <ul>
          <li className="active">Все</li>
          {items.map((name, index) => (
            <li key={`${name}_${index}`}>{name}</li>
          ))}
        </ul>
      </div>
      <div className="calendar">
        <div className="calendar__nav">
          <img src={left} alt="Yesterday" width="14" />
        </div>
        <div className="calendar__date">
          <img src={calendar} alt="Calendar" width="16" />
          <span>01/01 Пн</span>
        </div>
        <div className="calendar__nav">
          <img src={right} alt="Tomorrow" width="14" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
