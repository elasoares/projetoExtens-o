import styles from "./SobreNos.module.css";

export default function SobreNos() {
  return (
    <section className={styles.sobreNos} id="sobre">
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
        <img src="./sobre.png" alt="Sobre nós" className={styles.imagem} />
      </div>
    </section>
  );
}
