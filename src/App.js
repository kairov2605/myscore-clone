import React from 'react';
import Sport from './components/Sport';
import Header from './components/Header';
import { Football, Orders, Products } from './pages';
import { Route } from 'react-router-dom';

import './scss/app.scss';

function App() {
  return (
    <div className="wrapper ">
      <Header />
      <Sport items={['Хоккей', 'Теннис', 'Баскетбол', 'Волейбол', 'Гандбол']} />
      <div className="content">
        <div className="container">
          <Route path="/" component={Football} exact />
          <Route path="/order" component={Orders} />
          <Route path="/product" component={Products} />
        </div>
      </div>
    </div>
  );
}

export default App;
