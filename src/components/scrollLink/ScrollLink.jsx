import styles from './ScrollLink.module.css';

export default function ScrollLink({ children, section, onClick }) {
  return (
    <a
      className={styles.anchor}
      href={`#${section}`}
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick(); 
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      {children}
    </a>
  );
}