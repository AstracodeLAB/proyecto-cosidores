import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import QuiSom from "./pages/QuiSom.jsx";
import QueFem from "./pages/QueFem.jsx";
import Noticies from "./pages/Noticies.jsx";
import Contacte from "./pages/Contacte.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qui-som" element={<QuiSom />} />
        <Route path="/que-fem" element={<QueFem />} />
        <Route path="/noticies" element={<Noticies />} />
        <Route path="/contacte" element={<Contacte />} />
      </Routes>
    </Router>
  );
}

export default App;
