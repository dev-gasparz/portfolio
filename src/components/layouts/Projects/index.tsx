import React from "react";
import githubBlack from "../../../assets/images/logos/GitHub_Logo_black.png";
import githubWhite from "../../../assets/images/logos/GitHub_Logo_White.png";

interface ProjectProps {
  title: string;
  text: string;
  imgUrl: string;
  projectHref?: string;
  gitHref: string;
  position: "toLeft" | "toRight";
}

const Projects: React.FC<ProjectProps> = (props: ProjectProps) => {
  return (
    <section className="project container">
      <div className={`project-content ${props.position}`}>
        <div className="project-img">
          <img src={props.imgUrl} alt="" />
        </div>

        <div className="project-info">
          <a className="project-slug" href={props.projectHref} target="_blank">
            <h3>{props.title}</h3>
          </a>
          <p className="project-desc">{props.text}</p>
          <div className="project-stack">
            <span>React.js</span>
            <span>TypeScript</span>
            <span>Sass</span>
          </div>
          <div className="project-links">
            <a
              className="social-icon"
              href={props.gitHref}
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon-black" src={githubBlack} alt="" />
              <img className="icon-white" src={githubWhite} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
