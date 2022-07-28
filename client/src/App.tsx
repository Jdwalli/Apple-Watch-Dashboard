import React from "react";
import { VerticalNav } from "./components/navigation/VerticalNav";
import { Header } from "./components/common/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import { Home } from "./pages/Home";
import { Activity } from "./pages/Activity";
import { Vitals } from "./pages/Vitals";
import { Workouts } from "./pages/Workouts";
import { Sleep } from "./pages/Sleep";
import { Reports } from "./pages/Reports";
import { ArrowButton } from "./components/common/ArrowButton";

function App() {
  return (
    <Router>
      <div className="h-screen w-screen bg-gray-800">
        <VerticalNav />
        <div className="h-screen bg-primary ml-24">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/vitals" element={<Vitals />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/sleep" element={<Sleep />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
