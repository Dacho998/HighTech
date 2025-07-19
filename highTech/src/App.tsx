import './App.css'
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/homePage/homePage';
import { AboutUs } from './components/aboutUs/aboutUs';
import { NavBar } from './components/navBar/navBar';
import { Footer } from './components/footer/footer';
import { ServicesPage } from './components/services/card';
import { ContactPage } from './components/Contact/Contact';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/Services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
