import style from './style.module.scss';
import background from './background.jpg';

const Hero = () => (
  <div className={style.hero}>
    <div className={`container-sm ${style.wrapper}`}>
      <h1 className={style.h1}>Exoplanets discovered in 2022</h1>
    </div>
    <img className='img-fluid' src={background} alt='Earth from ISS' />
  </div>
);

export default Hero;
