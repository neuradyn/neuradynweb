import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

import Contact from './pages/Contact';
import Demo from './pages/Demo';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import About from './pages/About';
import Marketing from './pages/Marketing';
import HR from './pages/HR';
import Finance from './pages/Finance';
import Chatbot from './pages/Chatbot';

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
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/hr" element={<HR />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/chatbot" element={<Chatbot />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
