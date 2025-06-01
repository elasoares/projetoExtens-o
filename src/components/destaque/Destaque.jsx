import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";

import { Link } from 'react-router-dom';


import { Card } from '../card/Card';
import styles from './Destaque.module.css';
import Button from '../button/Button';
import { WhatsApp } from "../whatsApp/WhatsApp";

const destaque = [
    {img: img1, title:"Bermuda com elas...", brand:"nike"},
    {img: img2, title:"Camisetas", brand:"EA"},
    {img: img3, title:"Camisetas", brand:"nike"},
    {img: img4, title:"Camisetas", brand:"Boss"},

]

export default function Destaque(){

    return(
        <section className={styles.container} id="produtos">
            {/* <div className={styles.titleContainer}>
                <svg width="7" height="45" viewBox="0 0 7 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" width="6" height="45" rx="3" fill="#EBD96B"/>
                </svg>
                <h2 className={styles.title}><div className={styles.bar}></div>Em destaque</h2>
            </div> */}
            <div className={styles.destaque}>
                {destaque.map((item, index) => (
                        <div key={index} className={styles.item}>
                            <Card>
                                <img src={item.img} alt={item.title} className={styles.img} />
                                <div className={styles.descriptionContainer}>
                                    <div className={styles.textContainer}>
                                        <h3 className={styles.description}>{item.title}</h3>
                                        <p className={styles.brand}>{item.brand}</p>
                                    </div>
                                    <WhatsApp linkWhatsApp={styles.linkWhatsApp} iconWhatsApp={styles.iconWhatsApp} />
                                </div>
                            </Card>
                        </div>
                ))}
            </div>
            <Link to="/vitrine" className={styles.btnDirecionarVitrine}><Button children='Ir para vitrine'/></Link>
        </section>
    );
}