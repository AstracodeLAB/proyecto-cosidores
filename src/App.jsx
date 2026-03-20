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

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qui-som" element={<QuiSom />} />
        <Route path="/que-cosim" element={<QueCosim />} />
        <Route path="/que-cuinem" element={<QueCuinem />} />
        <Route path="/noticies" element={<Noticies />} />
        <Route path="/contacte" element={<Contacte />} />
        <Route path="/cosim/:slug" element={<PostDetail />} />   {/* ← detalle cosim */}
        <Route path="/cuinem/:slug" element={<PostDetail />} />  {/* ← detalle cuinem */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;