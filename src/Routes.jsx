import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./pages/NotFound";
import Contact from './pages/contact';
import AISolutions from './pages/ai-solutions';
import About from './pages/about';
import Homepage from './pages/homepage';
// ...existing code...
import Industries from './pages/industries';
import Privacy from './pages/privacy';
import Terms from './pages/terms';
import Security from './pages/security';
import Compliance from './pages/compliance';
import Cookies from './pages/cookies'
import CareersPage from './pages/careers'
import PredictiveEnginePage from "./pages/predictive-analytics-engine";


const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ai-solutions" element={<AISolutions />} />
        <Route path="/about" element={<About />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/security" element={<Security />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path='/careers' element={<CareersPage/>} />
        <Route path='/predictive' element={<PredictiveEnginePage/>}/>
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
