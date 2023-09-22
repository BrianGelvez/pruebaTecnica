import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Logos } from './components/Logos/Logos';
import { Product } from './components/Product/Product';
import { TextAndStep } from './components/TextAndStep/TextAndStep';

function App() {

  return (
    <div className='divContenedor-fgh'>
      <Header />
      <Logos />
      <TextAndStep />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
