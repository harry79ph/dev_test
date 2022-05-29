import React, { useEffect } from 'react';
// import style from './App.module.scss';
// import Home from './pages/Home';
// import Hero from './components/Hero';

const App = () => {
  
  const getData = async () => {
    const req = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await req.json();

    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>Hello</div>
    // <div className={style.main}>
    //   <Hero />
    //   <Home />
    // </div>
  );
};

export default App;
