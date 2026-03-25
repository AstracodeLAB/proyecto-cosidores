import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import QuiSom from "./pages/QuiSom.jsx";
import Noticies from "./pages/Noticies.jsx";
import Contacte from "./pages/Contacte.jsx";
import QueCosim from "./pages/QueCosim.jsx";
import QueCuinem from "./pages/QueCuinem.jsx";
import PostDetail from "./components/PostDetail.jsx"; // ← importa la página de detalle
import Footer from "./components/Footer.jsx";
import NotFound from "./pages/NotFound.jsx";
import CookieBanner from "./components/CookieBanner.jsx";
import PaginaLegal from "./pages/PaginaLegal.jsx";

function App() {
  return (
    <Router>
      <Header />
      <CookieBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qui-som" element={<QuiSom />} />
        <Route path="/que-cosim" element={<QueCosim />} />
        <Route path="/que-cuinem" element={<QueCuinem />} />
        <Route path="/noticies" element={<Noticies />} />
        <Route path="/contacte" element={<Contacte />} />
        <Route path="/cosim/:slug" element={<PostDetail />} />   {/* ← detalle cosim */}
        <Route path="/cuinem/:slug" element={<PostDetail />} /> 
        <Route path="/noticies/:slug" element={<PostDetail />} />
        <Route path="/:slug" element={<PaginaLegal />} />
        <Route path="*" element={<NotFound />} />
   
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;