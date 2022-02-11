import React, { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";

import { AllRoutes } from "./components/AllRoutes/AllRoutes";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <AllRoutes />
      </div>
    </div>
  );
}

export default App;
