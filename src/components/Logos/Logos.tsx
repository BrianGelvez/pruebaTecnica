import logo from '../../assets/clarifion_logo.webp';
import './Logos.modules.css';
import logo2 from '../../assets/logos2.png';

export const Logos = () => {
  return (
    <div className='logos-container-1'>
      <div className='logo1-1'>
        <img src={logo}/>
      </div>
      <div className='logo2-2'>
        <img src={logo2}/>
      </div>
    </div>
  );
};
