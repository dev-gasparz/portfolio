import React, { useState } from "react";
import LightModeIcon from "../../ui/icons/LightModeIcon";
import DarkModeIcon from "../../ui/icons/DarkModeIcon";
import ContatoModal from "../../Modals/Contato";
import headerLogo from "../../../assets/images/logos/header-logo.png";

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
      <div className="header-content">
        <a href="/" className="header-logo">
          <img src={headerLogo} alt="" />
        </a>

        <div className="header-right-content">
          <div className="menuLinks">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
