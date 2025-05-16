import styles from "./Banner.module.css";


export function Banner() {
    return (
        <section className={styles.container}>
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
                        Compre agora
                    </button>
                </div>
                <div className={styles.imageContainer}>
                    <img 
                        src="./img-women-banner.svg" 
                        alt="Banner" 
                        className={styles.bannerImage}
                    />
                </div>
        </section>
    );
}
