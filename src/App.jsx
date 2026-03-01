import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Layout Views
import LandingView from './views/LandingView';
import B2CView, { ScoreView, CardsView, LoansView, ClientLevelView, CrediPointsView } from './views/B2CView';

function App() {
  return (
    <Router>
      <div className="app-container w-full h-screen bg-slate-50 m-0 p-0 overflow-hidden">
        <Routes>
          {/* Public Landing Page */}
          <Route path="/" element={<LandingView />} />

          {/* Secure App Layout (Dashboard with Sidebar) */}
          <Route path="/b2c" element={<B2CView />}>
            <Route index element={<Navigate to="score" replace />} />

            {/* Nested Sub-routes for the Sidebar sections */}
            <Route path="score" element={<ScoreView />} />
            <Route path="tarjetas" element={<CardsView />} />
            <Route path="prestamos" element={<LoansView />} />
            <Route path="cliente" element={<ClientLevelView />} />
            <Route path="credipoints" element={<CrediPointsView />} />
          </Route>

          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
