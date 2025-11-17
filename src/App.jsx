import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PagePrueba from './components/PagePrueba.jsx';
import PostListNoticias from './components/PostListNoticias.jsx';
import PostDetallePrueba from './components/PostDetallePrueba.jsx';
import PostListServicios from './components/PostListServicios.jsx';
import Header from "./components/Header.jsx";
import logoRed from "./assets/images/logoRed.png";
import Hero from "./components/Hero.jsx";
import Manifest from "./components/Manifest.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  return (
    <Router>
      <div >
        <Routes>
          <Route path="/" element={
            <>
            <Header />
             <Hero
              logo={logoRed}
              text={`FET\nA\nSALT`}
              alt="Logo de la página Cosidores"
            /> 
            <Manifest />
            <Contact />
            <Footer />
            </>
          } />
          <Route path="/post/:slug" element={<PostDetallePrueba />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
