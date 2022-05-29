import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

const initialState = {
  planets: [],
  activeElements: [false, true, false]
}

const Context = ({ children }) => {
  const [items, setItems] = useState(initialState);
  const loadPlanets = (data) => {
    setItems({ ...items, planets: [...data] });
  };
  const sortByName = () => {
    setItems({
      ...items,
      planets: [...items.planets].sort((a, b) =>
        a.pl_name.localeCompare(b.pl_name),
      ),
      activeElements: [...items.activeElements].map((el, i) => {
        return i === 0 ? true : false;
      })
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
      })
    });
  };
  const sortByRadius = () => {
    setItems({
      ...items,
      planets: [...items.planets].sort((a, b) => a.pl_rade - b.pl_rade),
      activeElements: [...items.activeElements].map((el, i) => {
        return i === 2 ? true : false;
      })
    });
  };

  return (
    <GlobalContext.Provider
      value={{ items, loadPlanets, sortByName, sortByDate, sortByRadius }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const ListState = () => {
  return useContext(GlobalContext);
};

export default Context;
