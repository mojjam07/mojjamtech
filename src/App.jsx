import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Services from './pages/Services';
import Sponsorship from './pages/Sponsorship';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';
import AdminLogin from './admin/pages/AdminLogin';
import AdminDashboard from './admin/pages/AdminDashboard';
import TraineeManagement from './admin/pages/TraineeManagement';
import ProgramManagement from './admin/pages/ProgramManagement';
import AboutManagement from './admin/pages/AboutManagement';
import ServicesManagement from './admin/pages/ServicesManagement';
import SponsorshipManagement from './admin/pages/SponsorshipManagement';
import ContactManagement from './admin/pages/ContactManagement';
import GalleryManagement from './admin/pages/GalleryManagement';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <AuthProvider>
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
            <Route path="/gallery" element={
              <>
                <Header />
                <main className="main-content">
                  <Gallery />
                </main>
                <Footer />
              </>
            } />

            {/* Admin Routes - Login is public */}
            <Route path="/admin" element={<AdminLogin />} />
            
            {/* Protected Admin Routes */}
            <Route path="/admin/dashboard" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/trainees" element={
              <ProtectedRoute>
                <TraineeManagement />
              </ProtectedRoute>
            } />
            <Route path="/admin/programs" element={
              <ProtectedRoute>
                <ProgramManagement />
              </ProtectedRoute>
            } />
            <Route path="/admin/about" element={
              <ProtectedRoute>
                <AboutManagement />
              </ProtectedRoute>
            } />
            <Route path="/admin/services" element={
              <ProtectedRoute>
                <ServicesManagement />
              </ProtectedRoute>
            } />
            <Route path="/admin/sponsorship" element={
              <ProtectedRoute>
                <SponsorshipManagement />
              </ProtectedRoute>
            } />
            <Route path="/admin/contact" element={
              <ProtectedRoute>
                <ContactManagement />
              </ProtectedRoute>
            } />
            <Route path="/admin/gallery" element={
              <ProtectedRoute>
                <GalleryManagement />
              </ProtectedRoute>
            } />

            {/* 404 Not Found */}
            <Route path="*" element={
              <>
                <Header />
                <main className="main-content">
                  <NotFound />
                </main>
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

