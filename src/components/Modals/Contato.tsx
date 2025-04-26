import React from "react";
import "./style.scss";
import githubBlack from "../../assets/images/logos/GitHub_Logo_black.png";
import githubWhite from "../../assets/images/logos/GitHub_Logo_White.png";
import emailIcon from "../../assets/images/email.png";
import linkedinIcon from "../../assets/images/linkedin.png";

interface ContatoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContatoModal: React.FC<ContatoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
        <h2>Entre em Contato</h2>
        <div className="contato-content">
          <p>Me envie uma mensagem para saber mais sobre meu trabalho.</p>
          <div className="contato-links">
            <a href="https://github.com/dev-gasparz" target="_blank">
              <img className="icon-black" src={githubBlack} alt="" />
              <img className="icon-white" src={githubWhite} alt="" />
            </a>
            <a href="mailto:gabrielgaspar0208@gmail.com">
              <img className="icon-contato" src={emailIcon} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/umgaspar/" target="_blank">
              <img className="icon-contato" src={linkedinIcon} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContatoModal;
