import React from "react"
import NavBar from "./components/NavBar"
import Home from "./components/Home";
import Bot from "./components/Bot";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from './components/Contact'
import Footer from "./components/Footer";



export default function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Bot />
      <SocialLinks />
      <About/>
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}