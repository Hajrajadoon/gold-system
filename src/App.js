import React from 'react';
import Navbar from './shared/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
