import styles from "./Banner.module.css";


export default function Banner() {
    return (
        <section className={styles.container} id='home'>
                <div className={styles.textContainer}>
                    <h2 className={styles.title}>
                        Venha<br /> 
                        explorar<br /> 
                        nossa<br /> 
                        <span className={styles.bgTitle}>variedade</span><br /> 
                        de 
                        produtos<br />
                    </h2>
                    <button className={styles.button}>
                        <a className={styles.link} href='https://wa.me/c/5511988753870' target='_blank'> 
                            Compre agora
                        </a>
                    </button>
                </div>
                <div className={styles.imageContainer}>
                    <img 
                        src="./banner.svg"
                        alt="Banner" 
                        className={styles.bannerImage}
                    />
                </div>
        </section>
    );
}
