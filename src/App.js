import React from "react";

import Services from "./components/Services";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Blog from "./components/Blog";
import Testimonials from "./components/Testimonials";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import About from "./components/About";


function App() {
  return (
    <div style={{backgroundImage: `url("./BG.jpg")`
  }}>
 
    
   <Header />
   <Navbar />
   <Home />
   <About />
   <Services />
   <Portfolio />
   <Blog />
   <Testimonials />
   <Contact />
   <Footer />

    </div>
  );
}

export default App;
