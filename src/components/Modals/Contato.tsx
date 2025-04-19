import React from "react";
import "./style.scss";

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
        <p>Me envie uma mensagem para saber mais sobre meu trabalho.</p>
      </div>
    </div>
  );
};

export default ContatoModal;
