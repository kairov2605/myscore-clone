import React, { useState } from 'react';
import classNames from 'classnames';
import more from '../assets/img/more.svg';
import '../scss/components/sport.scss';
function Sport({ items }) {
  const [active, setActive] = useState(0);
  console.log(active);
  return (
    <div className="sport">
      <div className="sport__kinds">
        <ul>
          <li
            className={classNames(active === null ? 'active' : '')}
            onClick={() => setActive(null)}>
            Футбол
          </li>
          {items &&
            items.map((name, index) => (
              <li
                onClick={() => setActive(index)}
                className={classNames(active === index ? 'active' : '')}
                key={`${name}__${index}`}>
                {name}
              </li>
            ))}
        </ul>
      </div>
      <div className="sport__more">
        <img src={more} alt="More" width="20" />
        <span>Больше</span>
      </div>
    </div>
  );
}

export default Sport;
