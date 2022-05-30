import { ListState } from '../../context/Context';
import Table from '../Table';
import style from './style.module.scss';

const Planets = () => {

  const { items, sortByName, sortByDate, sortByRadius } = ListState();

  return (
    <div className={`container-sm ${style.main}`}>
      <div className={`my-3 ${style.btnWrapper}`}>
        <span className={style.sort}>Sort By:</span>
        <div className={style.buttons}>
          <button className="btn btn-dark btn-sm m-1" onClick={() => sortByName()}>Planet Name{items.activeElements[0] && <i className="bi bi-caret-down"></i>}</button>
          <button className="btn btn-dark btn-sm m-1" onClick={() => sortByRadius()}>Planet radius{items.activeElements[2] && <i className="bi bi-caret-down"></i>}</button>
          <button className="btn btn-dark btn-sm m-1" onClick={() => sortByDate()} autoFocus>Release date{items.activeElements[1] && <i className="bi bi-caret-down"></i>}</button>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default Planets;
