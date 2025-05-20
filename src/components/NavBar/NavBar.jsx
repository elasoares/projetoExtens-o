import { useState } from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/logo.png";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.logoArea}>
        {/* Toggle para mobile */}
        <button
          className={styles.menuToggle}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        <img src={logo} alt="Kmila Outlet" className={styles.logo} />
        <span className={styles.logoText}></span>
      </div>

      {/* Sidebar mobile */}
      <nav className={`${styles.links} ${isOpen ? styles.open : ""}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>
          Home
        </a>
        <a href="#produtos" onClick={() => setIsOpen(false)}>
          Produtos
        </a>
        <a href="#sobre" onClick={() => setIsOpen(false)}>
          Sobre
        </a>
        <a href="#contato" onClick={() => setIsOpen(false)}>
          Contato
        </a>
      </nav>

      <div className={styles.search}>
        <FiSearch className={styles.searchIcon} />
        <input type="text" placeholder="Search" />
      </div>
    </header>
  );
}

// Adicione o CSS para o componente NavBar
