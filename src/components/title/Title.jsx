import styles from './Title.module.css'
export default function Title({children}) {
    return(
        <div className={styles.containerTitle}>
                <svg width="7" height="45" viewBox="0 0 7 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" width="6" height="45" rx="3" fill="#EBD96B"/>
                </svg>
                <h2 className={styles.title}>{children}</h2>
            </div>
    )
}
