import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

const initialState = {
  planets: [],
  activeElements: [false, true, false],
};


const Context = ({ children }) => {

  const [items, setItems] = useState(initialState);
  const [isDown, setIsDown] = useState(true);
  const loadPlanets = (data) => {
    if (data.length > 0) {
      setItems({
        ...items,
        planets: [...data].sort(
          (a, b) =>
            new Date(a.releasedate).getTime() -
            new Date(b.releasedate).getTime(),
        ),
      });
    }
  };
  const sortByName = () => {
    setItems({
      ...items,
      planets: [...items.planets].sort((a, b) =>
        a.pl_name.localeCompare(b.pl_name),
      ),
      activeElements: [...items.activeElements].map((el, i) => {
        return i === 0 ? true : false;
      }),
    });
  };
  const sortByDate = () => {
    setItems({
      ...items,
      planets: [...items.planets].sort(
        (a, b) =>
          new Date(a.releasedate).getTime() - new Date(b.releasedate).getTime(),
      ),
      activeElements: [...items.activeElements].map((el, i) => {
        return i === 1 ? true : false;
      }),
    });
  };
  const sortByRadius = () => {
    setItems({
      ...items,
      planets: [...items.planets].sort((a, b) => a.pl_rade - b.pl_rade),
      activeElements: [...items.activeElements].map((el, i) => {
        return i === 2 ? true : false;
      }),
    });
  };
  const resetIcon = () => {
    setIsDown(true)
  }
  const toggleIcon = () => {
    setIsDown(prev => !prev);
  }
  const toggleSortOrder = () => {
    setItems({
      ...items,
      planets: [...items.planets].reverse()
    });
    toggleIcon();
  }
  const getData = async () => {
    try {
      const response = await fetch('https://node-js-proxy-server.vercel.app/binary-vision.s3.eu-west-2.amazonaws.com/discoveries.json');
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Network Error:', error);
      return null;
    }
  };

  return (
    <GlobalContext.Provider
      value={{ items, isDown, getData, loadPlanets, sortByName, sortByDate, sortByRadius, toggleSortOrder, resetIcon }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const ListState = () => {
  return useContext(GlobalContext);
};

export default Context;
