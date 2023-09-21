import './Header.modules.css'
import verificationImage from '../../assets/icons8-cuenta-verificada-24.png';
import deliveryFree from '../../assets/icons8-envío-gratuito-24.png'
import corazon from '../../assets/icons8-me-gusta-24.png'
import garantia from '../../assets/icons8-garantía-24.png'
import { useState, useEffect } from 'react';



export const Header = () => {

  const data = [
    {
      image: verificationImage,
      paragraph: '30-DAY SATISFACTION GUARANTEE',
    },
    {
      image: deliveryFree,
      paragraph: 'FREE DELIVERY ON ORDERS OVER $40.00',
    },
    {
      image: corazon,
      paragraph: '50.000+ HAPPY CUSTOMERS',
    },
    {
      image: garantia,
      paragraph: '100% MONEY BACK GUARANTEE',
    },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [currentParagraph, setCurrentParagraph] = useState(0);

  const handlePrevClick = () => {
    if (currentParagraph > 0) {
      setCurrentParagraph(currentParagraph - 1);
    }
  };

  const handleNextClick = () => {
    if (currentParagraph < data.length - 1) {
      setCurrentParagraph(currentParagraph + 1);
    }
  };

  return (
    <div className="Header">
      <div className='Text1'>
        {windowWidth <= 1000 ? (
          <div className='text-with-image'>
            <span onClick={handlePrevClick} className={`arrow left-arrow ${currentParagraph === 0 ? 'hidden' : ''}`}>
              &lt;
            </span>
            <img src={data[currentParagraph].image} className="verificationn"/>
            <p>{data[currentParagraph].paragraph}</p>
            <span onClick={handleNextClick} className={`arrow right-arrow ${currentParagraph === data.length - 1 ? 'hidden' : ''}`}>
              &gt;
            </span>
          </div>
        ) : (
          data.map((item, index) => (
            <div key={index} className='text-with-image'>
              <img src={item.image} className="verificationn"/>
              <p>{item.paragraph}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};