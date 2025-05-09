import React from "react";
import Projects from ".";
import projetoPortf from "../../../assets/images/projeto-portfolio.png";
import projetoFintech from "../../../assets/images/fintech.png";
import projetoDevToDev from "../../../assets/images/dev-to-dev.png";
import "aos/dist/aos.css";

const ProjectWrap: React.FC = () => {
  return (
    <section className="projects" id="projects">
      <h2>Meus projetos</h2>
      <div className="projects-gap">
        <div data-aos="fade-right" data-aos-duration="1500">
          <Projects
            imgUrl={projetoPortf}
            title="Portfólio Pessoal"
            text="Projeto desenvolvido com React, TypeScript e SASS, focado na apresentação dos meus trabalhos e habilidades como desenvolvedor front-end. Além de destacar animações suaves e responsividade, o portfólio foi pensado para refletir meu estilo de codar — com atenção aos detalhes, organização de componentes e uma experiência de navegação fluida. Todo o conteúdo é dinâmico e estruturado para ser facilmente escalável."
            gitHref="https://github.com/dev-gasparz/portfolio"
            projectHref="https://portfolio-tau-kohl-37.vercel.app/"
            position="toLeft"
            stack={["React", "TypeScript", "SASS"]}
          />
        </div>

        <div data-aos="fade-right" data-aos-duration="1500">
          <Projects
            imgUrl={projetoFintech}
            title="Dashboard Fintech"
            text="Aplicação construída com React, TypeScript e foco no uso prático da tipagem estática no desenvolvimento de interfaces modernas. O projeto simula um painel financeiro, exibindo dados como vendas, recebimentos e transações processadas, com gráficos e filtros dinâmicos. Durante o desenvolvimento, foram aplicadas boas práticas com hooks tipados, organização de componentes e manipulação segura de dados."
            gitHref="https://github.com/dev-gasparz/fintech"
            projectHref="https://fintech-phi-six.vercel.app/"
            position="toRight"
            stack={["React", "TypeScript", "Vite", "Recharts"]}
          />
        </div>

        <div data-aos="fade-right" data-aos-duration="1500">
          <Projects
            imgUrl={projetoDevToDev}
            title="Dev To Dev tools"
            text="Projeto desenvolvido com React, TypeScript e Firebase, trazendo um dashboard com várias ferramentas úteis para devs em um só lugar. A autenticação foi toda estruturada com o Context do react, garantindo controle global de estado do usuário. As rotas são gerenciadas com React Router dom, deixando tudo mais fluido e fácil de navegar."
            gitHref="https://github.com/dev-gasparz/dev-to-dev"
            projectHref="https://dev-to-dev.vercel.app/"
            position="toLeft"
            stack={["React", "TypeScript", "Firebase", "router-dom"]}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectWrap;
