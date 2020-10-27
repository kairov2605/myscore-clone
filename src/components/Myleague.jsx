import React from 'react';
import '../scss/components/myleague.scss';
function Myleague({ items }) {
  return (
    <div className="myleague">
      <div className="myleague__start">
        <img src="" alt="" />
        <span>Мои Лиги</span>
      </div>
      <div className="myleague__kinds">
        <ul>
          {items.map((name, index) => (
            <li key={`${name}_${index}`}>{name}</li>
          ))}
        </ul>
      </div>
      <div className="myleague__star">
        <div className="myleague__star-title">
          <h1>Мои команды</h1>
        </div>
        <div className="myleague__star-info">
          <p>Нажмите напротив названия команды, чтобы выбрать её.</p>
        </div>
      </div>
      <div className="myleague__star">
        <div className="myleague__star-title">
          <h1>Мои команды</h1>
        </div>
        <div className="myleague__star-info">
          <p>Нажмите напротив названия команды, чтобы выбрать её.</p>
        </div>
      </div>
    </div>
  );
}

export default Myleague;
