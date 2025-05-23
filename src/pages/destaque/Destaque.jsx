import styles from './Destaque.module.css';
import img1 from "../../assets/1.jpg"
import img2 from "../../assets/2.jpg"
import img3 from "../../assets/3.jpg"
import img4 from "../../assets/4.jpg"
import { CiShoppingCart } from "react-icons/ci";
import { Card } from '../../components/card/Card';
import { Link } from 'react-router-dom';

const destaque = [
    {img: img1, title:"Bermuda com elas...", brand:"nike"},
    {img: img2, title:"Camisetas", brand:"EA"},
    {img: img3, title:"Camisetas", brand:"nike"},
    {img: img4, title:"Camisetas", brand:"Boss"},

]

export default function Destaque(){
    return(
        <section className={styles.container} id="produtos">
            <div className={styles.titleContainer}>
                <h2 className={styles.title}><div className={styles.bar}></div>Em destaque</h2>
            </div>
            <div className={styles.destaque}>
                {destaque.map((item, index) => (
                    <Card key={index} className={styles.item}>
                        <img src={item.img} alt={item.title} className={styles.img} />
                        <div className={styles.descriptionContainer}>
                            <div className={styles.textContainer}>
                                <h3 className={styles.description}>{item.title}</h3>
                                <p className={styles.brand}>{item.brand}</p>
                            </div>
                            <a className={styles.cart} href=''><CiShoppingCart /></a>
                        </div>
                    </Card>
                ))}
            </div>
            <Link to="/vitrine" className={styles.btnDirecionarVitrine}>Ir para vitrine</Link>
        </section>
    );
}