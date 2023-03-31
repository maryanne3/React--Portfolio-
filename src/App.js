import React from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import Projects from "./components/projects";


function App() {
  return ( 
    <main>
      <Navbar />
      <About/>
      <Projects/>
      <Contact/>
    </main>
  );
}

export default App;
