import React, { useEffect, useState } from "react";
import "./styles/main.scss";
import { UiText } from "./components/ui/Text/Text";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Stacks from "./components/layouts/Stacks";
import Footer from "./components/layouts/footer";
import Header from "./components/layouts/header";
import ProjectWrap from "./components/layouts/Projects/ProjectWrap";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
    localStorage.setItem("theme", darkMode ? "light" : "dark");
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="app-container">
        <Header darkMode={darkMode} toggleTheme={toggleTheme} />
        <section className="intro ">
          <div className="intro-content container">
            <div className="text-box">
              <h2 className="title">Olá, Eu sou o Gaspar.</h2>
              <UiText text="Sou um desenvolvedor apaixonado por tecnologia. Especializo-me em criar soluções inovadoras que impulsionam o seu e-commerce." />
            </div>

            <DotLottieReact
              src="https://lottie.host/e4e7f27c-5c99-41dc-aa1a-d054738df6bc/x0RFvlGUS9.lottie"
              loop
              autoplay
            />
          </div>
        </section>

        <section className="stacks">
          <Stacks />
        </section>

        <ProjectWrap />
        <Footer />
      </div>
    </div>
  );
}

export default App;
