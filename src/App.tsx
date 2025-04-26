import React, { useEffect, useState } from "react";
import "./styles/main.scss";
import Header from "./components/Header";
import { UiText } from "./components/ui/Text/Text";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Stacks from "./components/layouts/Stacks";
import Projects from "./components/layouts/Projects";
import Footer from "./components/layouts/footer";

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

        <section className="projects">
          <h2>Meus projetos</h2>
          <div className="projects-gap">
            <Projects
              title="Projeto número 1"
              text="Desenvolvimento de uma loja virtual responsiva utilizando React e integração com VTEX. O foco do projeto foi a criação de uma interface fluida, com atenção especial a animações suaves e transições entre páginas. Incluí também um controle de carrinho com persistência de dados e um sistema de banners dinâmicos. O projeto destaca meu conhecimento em e-commerce e atenção aos detalhes de UI/UX."
              gitHref="https://github.com/dev-gasparz/portfolio"
              position="toLeft"
            />
            <Projects
              title="Projeto número 2"
              text="Projeto pessoal focado em experimentar animações com React e SASS. Desenvolvi uma landing page interativa com troca de tema (claro/escuro), transições entre seções e elementos com entrada animada baseados no scroll. Foi uma oportunidade para aprofundar conhecimentos em design de interfaces, usabilidade e microinterações visuais."
              gitHref="https://github.com/dev-gasparz/portfolio"
              position="toRight"
            />
            <Projects
              title="Projeto número 1"
              text="Desenvolvimento de uma loja virtual responsiva utilizando React e integração com VTEX. O foco do projeto foi a criação de uma interface fluida, com atenção especial a animações suaves e transições entre páginas. Incluí também um controle de carrinho com persistência de dados e um sistema de banners dinâmicos. O projeto destaca meu conhecimento em e-commerce e atenção aos detalhes de UI/UX."
              gitHref="https://github.com/dev-gasparz/portfolio"
              position="toLeft"
            />
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
