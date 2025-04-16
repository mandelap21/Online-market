import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './home/homepage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Only the HomePage for now */}
        <Route path="/" element={<HomePage />} />

        {/* Redirect any unknown path back to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
