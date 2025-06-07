import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import StepperNav from './components/StepperNav'
import StepOne from './components/StepOne'
import StepTwo from './components/StepTwo'
import StepThree from './components/StepThree'
import StepFour from './components/StepFour'
import StepFive from './components/StepFive'
import StepSix from './components/StepSix'
import './styles/skip.css'

const AppContent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation();
  const isFirstStep = location.pathname === '/';

  return (
    <div className="min-h-screen bg-black">
      {/* <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /> */}
      <StepperNav />
      
      <main className={`2xl:max-w-5xl 2xl:mx-auto min-h-screen ${isFirstStep ? 'pt-0' : 'pt-4'}`}>
        <Routes>
          <Route path="/" element={<StepOne />} />
          <Route path="/step-two" element={<StepTwo />} />
          <Route path="/step-three" element={<StepThree />} />
          <Route path="/step-four" element={<StepFour />} />
          <Route path="/step-five" element={<StepFive />} />
          <Route path="/step-six" element={<StepSix />} />
        </Routes>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App
