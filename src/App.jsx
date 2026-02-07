import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Services from './pages/Services';
import Sponsorship from './pages/Sponsorship';
import Contact from './pages/Contact';
import AdminLogin from './admin/pages/AdminLogin';
import AdminDashboard from './admin/pages/AdminDashboard';
import TraineeManagement from './admin/pages/TraineeManagement';
import ProgramManagement from './admin/pages/ProgramManagement';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Public Pages Layout */}
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <main className="main-content">
                <Home />
              </main>
              <Footer />
            </>
          } />
          <Route path="/about" element={
            <>
              <Header />
              <main className="main-content">
                <About />
              </main>
              <Footer />
            </>
          } />
          <Route path="/programs" element={
            <>
              <Header />
              <main className="main-content">
                <Programs />
              </main>
              <Footer />
            </>
          } />
          <Route path="/services" element={
            <>
              <Header />
              <main className="main-content">
                <Services />
              </main>
              <Footer />
            </>
          } />
          <Route path="/sponsorship" element={
            <>
              <Header />
              <main className="main-content">
                <Sponsorship />
              </main>
              <Footer />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Header />
              <main className="main-content">
                <Contact />
              </main>
              <Footer />
            </>
          } />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/trainees" element={<TraineeManagement />} />
          <Route path="/admin/programs" element={<ProgramManagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

