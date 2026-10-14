import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Perfil from './components/Perfil/Perfil';
import Habilidades from './components/Habilidades/Habilidades';
import Certificados from './components/Certificados/Certificados';
import Proyectos from './components/Proyectos/Proyectos';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Banner />
      <Perfil />
      <Habilidades />
      <Certificados />
      <Proyectos />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
