import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SkillSection from "./components/SkillSection";

const App = () => {
  return (
    <div className="App overflow-hidden">
      <Header />
      <Hero />
      <SkillSection />
    </div>
  );
};

export default App;
