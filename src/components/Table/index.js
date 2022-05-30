import style from './style.module.scss';
import { ListState } from '../../context/Context';

const Table = () => {

  const { items: list } = ListState();
  
  return (
    <div>
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
            <tr
              key={planet.sy_dist + planet.pl_orbper + planet.pl_rade + `${i}`}>
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

export default Table;
