import styles from "./SobreNos.module.css";
import sobreImage from "../../assets/sobre.png"; 

export default function SobreNos() {
  return (
    <section className={styles.sobreNos} id="sobre">
      <h2 className={styles.titulo}>
      <svg width="7" height="45" viewBox="0 0 7 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" width="6" height="45" rx="3" fill="#EBD96B"/>
      </svg>
      <span></span> Sobre nós
      </h2>
      <div className={styles.conteudo}>
        <p>
          Kmila Outlet é uma loja de variedades que está no mercado desde 2010,
          trazendo estilo e economia. Aqui você encontra aquela peça de roupa
          que é a sua cara, tênis estilosos pra dar aquele rolê e bonés que
          completam qualquer look.
          <br />
          <br />
          Nosso foco é deixar você se sentindo bem, confortável e com o visual
          em dia. Seja pro dia a dia, treino, festa ou só pra dar aquele upgrade
          no armário, temos o que você precisa.
          <br />
          <br />E o melhor: tudo com aquele atendimento de parceiro mesmo, sem
          enrolação.
        </p>
        <img src={sobreImage} alt="Sobre nós" className={styles.imagem} />
      </div>
    </section>
  );
}
