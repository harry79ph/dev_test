import { ListState } from '../../context/Context';
import Table from '../Table';
import style from './style.module.scss';

const Planets = () => {

  const { items, isDown, sortByName, sortByDate, sortByRadius, toggleSortOrder, resetIcon } = ListState();
  
  let iconJSX = null;
  if (isDown) {
    iconJSX = <i className="bi bi-caret-down ms-1"></i>;
  } else {
    iconJSX = <i className="bi bi-caret-up ms-1"></i>;
  }

  const handleClick = (index) => {
    if (items.activeElements[index]) {
      toggleSortOrder();
    } else {
      resetIcon();
      switch (index) {
        case 0:
          sortByName();
          break;
        case 1:
          sortByDate();
          break;
        case 2:
          sortByRadius();
        break;
        default:
          break;
      }
    }
  }

  return (
    <div className={`container-sm ${style.main}`}>
      <div className={`my-3 ${style.btnWrapper}`}>
        <span className={style.sort}>Sort By:</span>
        <div className={style.buttons}>
          <button className="btn btn-dark btn-sm m-1" onClick={() => handleClick(0)}>Planet Name{items.activeElements[0] && iconJSX}</button>
          <button className="btn btn-dark btn-sm m-1" onClick={() => handleClick(2)}>Planet Radius{items.activeElements[2] && iconJSX}</button>
          <button className="btn btn-dark btn-sm m-1" onClick={() => handleClick(1)} autoFocus>Release Date{items.activeElements[1] && iconJSX}</button>
        </div>
      </div>
      {items.planets.length ? <Table /> : <p className='text-center my-5'>Loading...</p>}
    </div>
  );
};

export default Planets;
