import React from 'react';
import Myleague from '../components/Myleague';
import Menu from '../components/Menu';
import Match from '../components/Match';

function Football() {
  return (
    <>
      <div className="main">
        <div className="main__list">
          <Myleague
            items={[
              'Премьер-лига',
              'БундесЛига',
              'Серия А',
              'Примера',
              'Премьерлига',
              'Евро',
              'Лига Чемпионов',
              'Лига Европы',
            ]}
          />
        </div>
        <div className="main__container">
          <div className="main__game">
            <Menu items={['LIVE', 'Мои игры', 'Коэффициенты', 'Завершенные', 'Расписание']} />
          </div>
          <div className="main__game-result">
            <Match />
          </div>
        </div>
      </div>
    </>
  );
}

export default Football;
