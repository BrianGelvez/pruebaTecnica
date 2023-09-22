import puntoAzul from '../../assets/puntoAzul.png';
import product from "../../assets/product.png";
import imagenBlue from "../../assets/imagenBlue.png"
import estrellas from "../../assets/estrellas.png"
import offer from "../../assets/offer.png"
import brian from "../../assets/brian.png"
import verification from "../../assets/verification.png"
import card from '../../assets/cards.png'
import Shield from '../../assets/escudo.png'
import './Product.modules.css';

export const Product = () => {
  // Función para envolver las palabras en un span si son mayúsculas o "$14 Each"
  const wrapWords = (text: string) => {
    const wordsToHighlight = ["ONE", "TIME", "$14", "53%", "Each"];
    return text.split(' ').map((word, index) => (
      wordsToHighlight.includes(word.toUpperCase()) || word === "$14" || word === "Each" ? (
        <span key={index} className="uppercase-text">{word} </span>
      ) : (
        <span key={index}>{word} </span>
      )
    ));
  }

  return (
    <div className="box-fgh">
      <div className='box1-fgh'>
        <p className='wrapWords2-fgh'>
        {wrapWords("ONE TIME ONLY Special Price For 6 Extra Clarifion For Only $14 Each ($84.00 Total!)")}
        </p>
        <img src={product} className='divProduct-fgh' />
        <div className='boxComment-fgh'>
          <div className='divComment-fgh'>
            <div className='imagen1-fgh'>
              <img src={brian} className='brian' />
            </div>
            <div className='divX-fgh'>
              <img src={estrellas} className='estrellas2' />
              <div className='divInfoComment-fgh'>
                <p className='name-fgh'><b>Brian Gelvez</b></p>
                <img src={verification} className='verification-fgh' />
              </div>
            </div>
          </div>
          <p className='paragraphComment-fgh'>“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”</p>
        </div>
      </div>
      <div className='infoProducto-fgh'>
        <div className='titleee-fgh'>
        <p className='wrapWords-fgh'>
          {wrapWords("ONE TIME ONLY Special Price For 6 Extra Clarifion For Only $14 Each ($84.00 Total!)")}
        </p>
        </div>
        <div className='divResponsive-fgh'>
        <img src={imagenBlue} className='imagenAzul-fgh' />
        <p className='titleImage-fgh'>Clarifion Air Ionizer</p>
        <img src={estrellas} className='estrellas' />
        <br />
        <img src={puntoAzul} className='puntoAzul-fgh' />
        <p className='left-fgh'>12 left in Stock</p>
        <br />
        <p className='texto-fgh'>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
        <div className='treeText-fgh'>
          <p>✔️ Negative Ion Technology may <b>help with allergens</b></p>
          <p>✔️ Designed for <b>air rejuvenation</b></p>
          <p>✔️ <b>Perfect for every room</b> in all types of places.</p>
        </div>
        </div>
        <div className='Divoffer-fgh'>
          <img src={offer} className='offer-fgh' />
          <p>
            Save <span className="highlighted-text-fgh">53%</span>  and get <span className="highlighted-text-fgh">6 extra Clarifion</span> for only <span className="highlighted-text-fgh">$14 Each</span>.
          </p>
        </div>
        <a href="https://www.linkedin.com/in/briangelvez97/">
          <button className='botonGreen-fgh'><b>YES - CLAIM MY DISCOUN<b className='discount'>T ➜</b></b></button>
        </a>
        <img src={card} className='cards-fgh' />
        <p className='noThanks-fgh'>NO THANKS, I DON'T WANT THIS.</p>
        <div className='divShieldAndText-fgh'>
          <img src={Shield} className='shield' />
          <p className='shieldP-fgh'>If you are not completely thrilled with your Clarifion - We have a 30 day satisfaction guarantee. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</p>
        </div>
      </div>
    </div>
  );
};