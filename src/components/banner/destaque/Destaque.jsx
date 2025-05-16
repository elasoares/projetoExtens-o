import styles from './Destaque.module.css';

const destaque = [
    {img:"./1.jpg", title:"Bermuda com elas...", brand:"nike", price:"R$ 00,00"},
    {img:"./2.jpg", title:"Camisetas", brand:"EA", price:"R$ 00,00"},
    {img:"./3.jpg", title:"Camisetas", brand:"nike", price:"R$ 00,00"},
    {img:"./4.jpg", title:"Camisetas", brand:"Boss", price:"R$ 00,00"},
]

export function Destaque(){
    return(
        <section className={styles.container}>
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