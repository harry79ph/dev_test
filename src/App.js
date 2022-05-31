import React, { useEffect } from 'react';
import style from './App.module.scss';
import Home from './pages/Home';
import Hero from './components/Hero';
import Planets from './components/Planets/index';
import { ListState } from './context/Context';

const App = () => {

  const { loadPlanets, getData } = ListState();

  useEffect(() => {
    getData().then((data) => {
      loadPlanets(data);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style.main}>
      <Hero />
      <Home />
      <Planets />
    </div>
  );
};

export default App;
