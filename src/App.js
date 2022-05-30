import React, { useEffect } from 'react';
import style from './App.module.scss';
import Home from './pages/Home';
import Hero from './components/Hero';
import Planets from './components/Planets/index';
import { ListState } from './context/Context';

const App = () => {

  const { loadPlanets, sortByDate } = ListState();

  const getData = async () => {
    try {
      const response = await fetch('https://node-js-proxy-server.vercel.app/binary-vision.s3.eu-west-2.amazonaws.com/discoveries.json');
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('There has been a problem with your fetch operation:', error);
      return null;
    }
  };
  
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
