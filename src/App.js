import "./App.css";
import Blog from "./components/Blog";
import Github from "./components/Github";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SkillSection from "./components/SkillSection";

const App = () => {
  return (
    <div className="App overflow-hidden">
      <Header />
      <Hero />
      <SkillSection />
      <Blog />
      <Github />
    </div>
  );
};

export default App;
