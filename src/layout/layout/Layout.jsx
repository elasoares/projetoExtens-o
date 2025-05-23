import NavBar from "../header/NavBar";
import Footer from "../footer/Footer";
import styles from "./Layout.module.css"

export function Layout({children}){
    return(
        <div className={styles.container}>
            <NavBar className={styles.header}/>
            <main className={styles.main}>
                {children}
            </main>
            <Footer className={styles.footer}/>
        </div>
    );
}