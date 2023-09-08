import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Events from "./components/Events";
import Infos from "./components/Infos";
import Footer from "./components/Footer";
import Members from "./components/Members";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section />
      <Events />
      <Infos />
      <Members/>
      <Footer/>
    </div>
  );
}

export default App;
