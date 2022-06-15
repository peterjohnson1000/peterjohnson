import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog";
import Github from "./components/Github";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import SkillSection from "./components/SkillSection";
import About from "./components/About";

const App = () => {
  return (
    <div className="App overflow-hidden dark:bg-dPrimary dark:text-primaryC">
      <Header />
      <Hero />
      <SkillSection />
      <Blog />
      <Github />
      <Footer />
    </div>
  );
};

export default App;
