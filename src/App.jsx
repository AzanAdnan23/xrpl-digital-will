// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDashboard from "./pages/UserDashboard";
import Recipient from "./pages/Recipient";
import HomePage from "./pages/Homepage";
import NavBar from "./components/NavBar";

function App() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const handleConnect = () => {
    setIsWalletConnected(true);
  };

  return (
    <Router>
      <NavBar onConnect={handleConnect} />

      <Routes>
        <Route path="/userdashboard" element={<UserDashboard isWalletConnected={isWalletConnected} />} />
        <Route path="/recipient" element={<Recipient />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
