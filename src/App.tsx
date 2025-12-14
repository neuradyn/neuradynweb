import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

import Contact from './pages/Contact';
import Demo from './pages/Demo';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import About from './pages/About';

import ScrollToTop from './components/utils/ScrollToTop';
import HashScroll from './components/utils/HashScroll';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <HashScroll />
      <div className="min-h-screen bg-deep-void text-mist-grey selection:bg-electric-cyan/30 selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
