import React, { useState } from "react";
import LightModeIcon from "./ui/icons/LightModeIcon";
import DarkModeIcon from "./ui/icons/DarkModeIcon";
import { UiLink } from "./ui/Link/Link";
import ContatoModal from "./Modals/Contato";

interface HeaderProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

interface HeaderProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleTheme }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header>
      <div className="menuLinks">
        <UiLink link="www.google.com" text="Sobre mim" target="_blank" />
        <UiLink link="www.google.com" text="Projetos" target="_blank" />
        <button className="menu-link" onClick={() => setIsModalOpen(true)}>
          Contato
        </button>
      </div>
      <button className="changeTheme" onClick={toggleTheme}>
        {darkMode ? (
          <DarkModeIcon width={26} height={26} fill="#ffffffee" />
        ) : (
          <LightModeIcon width={26} height={26} fill="#2d2f36cc" />
        )}
      </button>
      <ContatoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </header>
  );
};

export default Header;
