import { BrowserRouter, Route, Routes } from "react-router-dom";
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
    <BrowserRouter>
      <div className="App overflow-hidden dark:bg-dPrimary dark:text-primaryC">
        <Header />
        <Routes>
          <Route
            path="/"
            element={[
              <Hero />,
              <SkillSection />,
              <Blog />,
              <Github />,
              <Footer />,
            ]}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
