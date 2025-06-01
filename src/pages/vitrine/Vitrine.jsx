import { useState } from "react"; 

import styles from "./Vitrine.module.css";
import  Button  from "../../components/button/Button";
import { produtos } from "../../components/produtos/produtos";
import { Card } from "../../components/card/Card";
import { WhatsApp } from "../../components/whatsApp/WhatsApp";
import TextInput from "../../components/input/TextInput";
import Title from "../../components/title/Title";


export function Vitrine(){
    const [genero, setGenero] = useState("todos");
    const [busca,setBusca] = useState("");

    const produtoFiltrados = produtos.filter((p)=>
        genero === "todos" ? true: p.genero === genero
    );
    const produtosFiltradosPorInput = produtoFiltrados.filter((p) =>
        p.title.toLowerCase().includes(busca.toLowerCase()) ||
        p.brand.toLowerCase().includes(busca.toLowerCase())
    )

    return(
        <>              
        <section className={styles.container}>
            <Title children='Nossos Produtos'/>
            <div className={styles.containerInput}>
                <TextInput id='busca-por-texto' onChange={(e) => setBusca(e.target.value)}/>
                   <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className={styles.iconLupa}
                    >
                            <path 
                            d="M11.742 10.344a6.5 6.5 0 10-1.397 1.398h-.001l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85zm-5.242 1.156a5 5 0 110-10 5 5 0 010 10z" 
                            />
                    </svg>
            </div>
            <div className={styles.filterContainer}>
                <Button onClick={() => setGenero("feminino")} ativo={genero === "feminino"}>Feminino</Button>
                <Button onClick={() => setGenero("masculino")} ativo={genero === "masculino"}>Masculino</Button>
                <Button onClick={() => setGenero("todos")} ativo={genero === "todos"}>Todos</Button>
            </div>
            <div className={styles.destaque}>
                {produtosFiltradosPorInput.map((p, index)=>{
                    return(
                        <div key={index} className={styles.item}>
                            <Card>
                                <img src={p.img} alt={p.title} className={styles.img} />
                                <div className={styles.descriptionContainer}>
                                    <div className={styles.textContainer}>
                                        <h3 className={styles.description}>{p.title}</h3>
                                        <p className={styles.brand}>{p.brand}</p>
                                    </div>
                                    <WhatsApp linkWhatsApp={styles.linkWhatsApp} iconWhatsApp={styles.iconWhatsApp} />
                                </div>
                            </Card>
                        </div>
                    )
                })}
            </div>

        </section> 
        </>
    );
}