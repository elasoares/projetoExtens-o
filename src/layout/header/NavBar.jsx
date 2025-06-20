import { useState } from "react";
import styles from "./NavBar.module.css";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import ScrollLink from "../../components/scrollLink/ScrollLink";

export default function NavBar({className}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`${className} ${styles.navbar}`}>
      <div className={styles.logoArea}>

        <button
          className={styles.menuToggle}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        <img src="./logo.png" alt="Kmila Outlet" className={styles.logo} />
        <span className={styles.logoText}></span>
      </div>


      <nav className={`${styles.links} ${isOpen ? styles.open : ""}`}>
        <a href="/" onClick={() => setIsOpen(false)}>
          Home
        </a>
        <ScrollLink children='Produtos' onClick={() => setIsOpen(false)} section='produtos'/>
        <ScrollLink children='Sobre' onClick={() => setIsOpen(false)} section='sobre'/>
        <ScrollLink children='Contato' onClick={() => setIsOpen(false)} section='contato'/>
      </nav>

      <div className={styles.search}>
        <FiSearch className={styles.searchIcon} />
        <input type="text" placeholder="Search" />
      </div>
    </header>
  );
}


