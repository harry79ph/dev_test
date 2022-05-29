import React, { useEffect } from 'react';
import style from './App.module.scss';
import Home from './pages/Home';
import Hero from './components/Hero';
import data from './data';
import Planets from './components/Planets/index';
import { ListState } from './context/Context';

const App = () => {

  const { items, loadPlanets, sortByName, sortByDate, sortByRadius } = ListState();
  
  useEffect(() => {
    loadPlanets(data);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style.main}>
      <Hero />
      <Home />
      <Planets list={items} sortByName={sortByName} sortByDate={sortByDate} sortByRadius={sortByRadius} />
    </div>
  );
};

export default App;
