import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Routes from "./components/Routes";
import React, { useState, useEffect } from "react";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes />
      </div>
    </div>
  );
}

export default App;
