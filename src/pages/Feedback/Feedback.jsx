import styles from './Feedback.module.css'
import FeedbackCard from "../../components/FeedbackCard/FeedbackCard"

export default function Feedback(){
    const clientesFeedback = {
        cliente1: {
            nome: 'Emily Wilson',
            descricao: "The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly.I'm beyond satisfied!"
        },
        cliente2: {
            nome: 'Sarah Thompson',
            descricao: "I absolutely love the quality and style of the clothing I purchased from this website. customer service was outstanding, and I received my order quickly. Highly recommended!"
        },
        cliente3: {
            nome: 'Olivia Martinez',
            descricao: "I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!"
        }
    }
    return(
        <div className={styles.containerFlex}>
            <div className={styles.containerTitle}>
                <svg width="7" height="45" viewBox="0 0 7 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" width="6" height="45" rx="3" fill="#EBD96B"/>
                </svg>
                <h2>Feedback</h2>
            </div>
            <div className={styles.containerCards}> 
            <FeedbackCard nome={clientesFeedback.cliente1.nome} descricao={clientesFeedback.cliente1.descricao}/>
            <FeedbackCard nome={clientesFeedback.cliente2.nome} descricao={clientesFeedback.cliente2.descricao}/>
            <FeedbackCard nome={clientesFeedback.cliente3.nome} descricao={clientesFeedback.cliente3.descricao}/>
            </div>
        </div>
    )
}