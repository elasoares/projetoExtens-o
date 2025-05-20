import styles from './Destaque.module.css';
import img1 from "../../assets/1.jpg"
import img2 from "../../assets/2.jpg"
import img3 from "../../assets/3.jpg"
import img4 from "../../assets/4.jpg"

const destaque = [
    {img: img1, title:"Bermuda com elas...", brand:"nike", price:"R$ 00,00"},
    {img: img2, title:"Camisetas", brand:"EA", price:"R$ 00,00"},
    {img: img3, title:"Camisetas", brand:"nike", price:"R$ 00,00"},
    {img: img4, title:"Camisetas", brand:"Boss", price:"R$ 00,00"},
]

export default function Destaque(){
    return(
        <section className={styles.container} id="produtos">
            <div className={styles.titleContainer}>
                <h2 className={styles.title}><div className={styles.bar}></div>Em destaque</h2>
            </div>
            <div className={styles.destaque}>
                {destaque.map((item, index) => (
                    <div key={index} className={styles.item}>
                        <img src={item.img} alt={item.title} className={styles.img} />
                        <div className={styles.descriptionContainer}>
                            <div className={styles.textContainer}>
                                <h3 className={styles.description}>{item.title}</h3>
                                <p className={styles.brand}>{item.brand}</p>
                            </div>
                            <button className={styles.price}>{item.price}</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}