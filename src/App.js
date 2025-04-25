
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <NavbarComponent />

        <Suspense fallback={<div className="page-loader">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>

        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
