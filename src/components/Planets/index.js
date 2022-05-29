import style from './style.module.scss';

const Planets = ({list, sortByName, sortByDate, sortByRadius}) => {

  return (
    <div className={`container-sm ${style.main}`}>
      <div className='my-3'>
        <span className={style.sort}>Sort By:</span>
        <button className="btn btn-dark btn-sm m-1" onClick={() => sortByName()}>Planet Name{list.activeElements[0] && <i className="bi bi-caret-down"></i>}</button>
        <button className="btn btn-dark btn-sm m-1" onClick={() => sortByRadius()}>Planet radius{list.activeElements[2] && <i className="bi bi-caret-down"></i>}</button>
        <button className="btn btn-dark btn-sm m-1" onClick={() => sortByDate()} autoFocus>Release date{list.activeElements[1] && <i className="bi bi-caret-down"></i>}</button>
      </div>
      <table className="table">
        <thead>
          <tr className={style.tr}>
            <th scope="col"> Planet Name</th>
            <th scope="col">Planet radius (earth units)</th>
            <th scope="col">Release date</th>
          </tr>
        </thead>
        <tbody className={style.tbody}>
        {list.planets.map((planet, i) => (
            <tr key={planet.pl_rade + i}>
                <td>{planet.pl_name}</td>
                <td>{planet.pl_rade}</td>
                <td>{planet.releasedate}</td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default Planets;
