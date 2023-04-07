import "./App.css";
import React from "react";
import Profile from "./PortfolioContainer/Profile/Profile"
import Skills from "./PortfolioContainer/Skills/Skills";
import Project from "./PortfolioContainer/Projects/Projects";
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe";
import Footer from "./PortfolioContainer/Footer/Footer";


function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
  }, [darkMode]);

  return (
    <div className="App">
      <button className="dark-btn" onClick={() => setDarkMode(!darkMode)}>
        <span class="material-symbols-outlined">dark_mode</span>
      </button>

      <Profile/>
      <Skills />
      <Project />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
