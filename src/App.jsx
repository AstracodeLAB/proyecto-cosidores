import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PagePrueba from './components/PagePrueba.jsx';
import PostListNoticias from './components/PostListNoticias.jsx';
import PostDetallePrueba from './components/PostDetallePrueba.jsx';
import PostListServicios from './components/PostListServicios.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={
            <>
              <PagePrueba />
              <PostListNoticias />
              <PostListServicios />
            </>
          } />
          <Route path="/post/:slug" element={<PostDetallePrueba />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
