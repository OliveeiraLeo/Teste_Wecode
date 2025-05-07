import banner3 from '../assets/images/Banners/Banner3.png';
import banner4 from '../assets/images/Banners/Banner4.png';
import '../styles/Banners.scss';

function BannersInferiores() {
  return (
    <div className="banners-inferiores">
      <img src={banner3} alt="Banner 3" className="inferior-banner1" />
      <img src={banner4} alt="Banner 4" className="inferior-banner2" />
    </div>
  );
}

export default BannersInferiores;
