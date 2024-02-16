
import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Catalog from './pages/catalog';
import About from './pages/about';
import Home from './pages/home';


import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalog" element={<Catalog />} />
          </Routes>
          
          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
