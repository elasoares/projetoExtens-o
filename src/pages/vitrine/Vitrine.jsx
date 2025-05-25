import { useState } from "react"; 

import styles from "./Vitrine.module.css";
import { Button } from "../../components/button/Button";
import { produtos } from "../../components/produtos/produtos";
import { Card } from "../../components/card/Card";


export function Vitrine(){
    const [genero, setGenero] = useState("todos");

    const produtoFiltrados = produtos.filter((p)=>
        genero === "todos" ? true: p.genero === genero
    );

    return(
        <section className={styles.container}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}><div className={styles.bar}></div>Nossos produtos</h2>
            </div>
            <div className={styles.filterContainer}>
                <Button onClick={() => setGenero("feminino")} ativo={genero === "feminino"}>Feminino</Button>
                <Button onClick={() => setGenero("masculino")} ativo={genero === "masculino"}>Masculino</Button>
                <Button onClick={() => setGenero("todos")} ativo={genero === "todos"}>Todos</Button>
            </div>
            <div className={styles.destaque}>
                {produtoFiltrados.map((p)=>{
                    return(
                        <Card key={p.id}>
                            <img src={p.img} alt={p.title} className={styles.img} />
                            <div className={styles.descriptionContainer}>
                                <div className={styles.textContainer}>
                                    <h3 className={styles.description}>{p.title}</h3>
                                    <p className={styles.brand}>{p.brand}</p>
                                </div>
                            </div>
                        </Card>
                    )
                })}
            </div>

        </section> 
    );
}