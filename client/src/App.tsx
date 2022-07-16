import React from 'react';
import { VerticalNav } from './components/navigation/VerticalNav';
import { Header } from './components/common/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='h-screen w-screen bg-gray-800'>
      <VerticalNav /> 
      <div className="h-screen bg-primary ml-24">
        <Header />
        <Routes>
            <Route />
          </Routes>
      </div>

      </div>
    </Router>
  );
}

export default App;

