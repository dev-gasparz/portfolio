import React from "react";
import Projects from ".";
import projetoPortf from "../../../assets/images/projeto-portfolio.png";

const ProjectWrap: React.FC = () => {
  return (
    <section className="projects">
      <h2>Meus projetos</h2>
      <div className="projects-gap">
        <Projects
          imgUrl={projetoPortf}
          title="Portfólio Pessoal"
          text="Projeto desenvolvido com React, TypeScript e SASS, focado na apresentação dos meus trabalhos e habilidades como desenvolvedor front-end. Além de destacar animações suaves e responsividade, o portfólio foi pensado para refletir meu estilo de codar — com atenção aos detalhes, organização de componentes e uma experiência de navegação fluida. Todo o conteúdo é dinâmico e estruturado para ser facilmente escalável."
          gitHref="https://github.com/dev-gasparz/portfolio"
          projectHref="https://portfolio-tau-kohl-37.vercel.app/"
          position="toLeft"
          stack={["React.js", "TypeScript", "SASS"]}
        />

        <Projects
          imgUrl={projetoPortf}
          title="Portfólio Pessoal"
          text="Projeto desenvolvido com React, TypeScript e SASS, focado na apresentação dos meus trabalhos e habilidades como desenvolvedor front-end. Além de destacar animações suaves e responsividade, o portfólio foi pensado para refletir meu estilo de codar — com atenção aos detalhes, organização de componentes e uma experiência de navegação fluida. Todo o conteúdo é dinâmico e estruturado para ser facilmente escalável."
          gitHref="https://github.com/dev-gasparz/portfolio"
          projectHref="https://portfolio-tau-kohl-37.vercel.app/"
          position="toRight"
          stack={["React.js", "TypeScript", "SASS"]}
        />
      </div>
    </section>
  );
};

export default ProjectWrap;
