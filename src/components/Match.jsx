import React from 'react';
import '../scss/components/match.scss';

const Match = () => {
  return (
    <div className="match">
      <div className="match__league">
        <div className="match__league-info">
          <input type="checkbox" name="happy" value="yes" />

          <span>АНГЛИЯ: Премьер-лига</span>
        </div>
        <h1>Таблица</h1>
      </div>
      <div className="match__info">
        <div className="match__info-time">
          <input type="checkbox" name="happy" value="yes" />
          <span>23:55</span>
        </div>

        <div className="match__info-team">
          <h1>Локомотив Москва</h1>
          <h1>-</h1>
          <h1>Бавария</h1>
        </div>
      </div>
    </div>
  );
};

export default Match;
