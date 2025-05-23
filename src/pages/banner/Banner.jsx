import styles from "./Banner.module.css";
import banner from "../../assets/banner.svg"


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
                        Compre agora
                    </button>
                </div>
                <div className={styles.imageContainer}>
                    <img 
                        src={banner}
                        alt="Banner" 
                        className={styles.bannerImage}
                    />
                </div>
        </section>
    );
}
