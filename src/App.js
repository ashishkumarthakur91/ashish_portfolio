import { useState } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div  className={darkMode && "dark"}>
       <Header darkMode={darkMode} setDarkMode={setDarkMode} />

       <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
          
          <Profile />
          <Skill />
          <Project />
          <Contact />
          <Footer />
       </main>
    </div>
  );
}

export default App;
