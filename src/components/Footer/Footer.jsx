import { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import wpp from '../../assets/wpp.png'
import styles from './Footer.module.css'


export default function Footer() {
    const [largura, setLargura] = useState(window.innerWidth);
useEffect(() => {
    const resize = () => setLargura(window.innerWidth);
    window.addEventListener('resize',resize)
    return () => window.removeEventListener('resize', resize)
},[])
    return(
        <> 
        <div className={styles.containerFlex}>
            <div className={styles.divLogo}>
                <img className={styles.logo} src={logo} alt='logo'/>
                {largura > 1023 ? (
                    <a href='https://www.instagram.com/kmilaoutlet/' target='_blank'> 
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.1598 0.280029C4.71247 0.280029 0.279785 4.71271 0.279785 10.16V23.84C0.279785 29.2873 4.71247 33.72 10.1598 33.72H23.8398C29.2871 33.72 33.7198 29.2873 33.7198 23.84V10.16C33.7198 4.71271 29.2871 0.280029 23.8398 0.280029H10.1598ZM10.1598 1.80003H23.8398C28.4655 1.80003 32.1998 5.5343 32.1998 10.16V23.84C32.1998 28.4658 28.4655 32.2 23.8398 32.2H10.1598C5.53406 32.2 1.79979 28.4658 1.79979 23.84V10.16C1.79979 5.5343 5.53406 1.80003 10.1598 1.80003ZM26.1198 6.36003C25.2803 6.36003 24.5998 7.04056 24.5998 7.88003C24.5998 8.7195 25.2803 9.40003 26.1198 9.40003C26.9593 9.40003 27.6398 8.7195 27.6398 7.88003C27.6398 7.04056 26.9593 6.36003 26.1198 6.36003ZM16.9998 8.64003C12.3917 8.64003 8.63979 12.3919 8.63979 17C8.63979 21.6081 12.3917 25.36 16.9998 25.36C21.6079 25.36 25.3598 21.6081 25.3598 17C25.3598 12.3919 21.6079 8.64003 16.9998 8.64003ZM16.9998 10.16C20.7864 10.16 23.8398 13.2134 23.8398 17C23.8398 20.7867 20.7864 23.84 16.9998 23.84C13.2132 23.84 10.1598 20.7867 10.1598 17C10.1598 13.2134 13.2132 10.16 16.9998 10.16Z" fill="#FFFFFF"/>
                    </svg>
                </a>
                ) : null }
            </div>
            <div className={styles.containerEmpresa}>
                <h2 className={styles.title}>Empresa</h2>
                <ul className={styles.lista}>
                    <li className={styles.item}>
                        Home
                    </li>
                    <li className={styles.item}>
                        Nossos Produtos
                    </li>
                    <li className={styles.item}>
                        Sobre
                    </li>
                </ul>
            </div>
            <div className={styles.containerFaleConosco}>
                <h2 className={styles.title}>Fale Conosco</h2>
                <span className={styles.text}>Nos Chame Pelo Whatsapp!</span>
                <a href='https://wa.me/c/5511988753870' target='_blank'> 
                <img className={styles.wpp} src={wpp} alt='wpp-icon'/>
                </a>
            </div>
            <div className={styles.containerRedeSocial}>
                <h2 className={styles.title}>Rede Social</h2>
                <a href='https://www.instagram.com/kmilaoutlet/' target='_blank'> 
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.1598 0.280029C4.71247 0.280029 0.279785 4.71271 0.279785 10.16V23.84C0.279785 29.2873 4.71247 33.72 10.1598 33.72H23.8398C29.2871 33.72 33.7198 29.2873 33.7198 23.84V10.16C33.7198 4.71271 29.2871 0.280029 23.8398 0.280029H10.1598ZM10.1598 1.80003H23.8398C28.4655 1.80003 32.1998 5.5343 32.1998 10.16V23.84C32.1998 28.4658 28.4655 32.2 23.8398 32.2H10.1598C5.53406 32.2 1.79979 28.4658 1.79979 23.84V10.16C1.79979 5.5343 5.53406 1.80003 10.1598 1.80003ZM26.1198 6.36003C25.2803 6.36003 24.5998 7.04056 24.5998 7.88003C24.5998 8.7195 25.2803 9.40003 26.1198 9.40003C26.9593 9.40003 27.6398 8.7195 27.6398 7.88003C27.6398 7.04056 26.9593 6.36003 26.1198 6.36003ZM16.9998 8.64003C12.3917 8.64003 8.63979 12.3919 8.63979 17C8.63979 21.6081 12.3917 25.36 16.9998 25.36C21.6079 25.36 25.3598 21.6081 25.3598 17C25.3598 12.3919 21.6079 8.64003 16.9998 8.64003ZM16.9998 10.16C20.7864 10.16 23.8398 13.2134 23.8398 17C23.8398 20.7867 20.7864 23.84 16.9998 23.84C13.2132 23.84 10.1598 20.7867 10.1598 17C10.1598 13.2134 13.2132 10.16 16.9998 10.16Z" fill="#FFFFFF"/>
                    </svg>
                </a>
            </div>
            {/* <div className={styles.containerEmail}>
                <h2 className={styles.titleEmail}>Fique por dentro das novidades!</h2>
                <div className={styles.containerInput}>
                <input type='text' className={styles.inputEmail} placeholder='Digite seu e-mail'/>
                <button className={styles.btEmail}><span className={styles.btText}>Enviar</span></button>
                </div>
            </div> */}
            <div className={styles.containerCopyRight}>
                <hr className={styles.line}/>
                <span className={styles.text}>Copyright © 2025 Kmila Outlet.Todos os direitos reservados.</span>
            </div>
        </div>
        
        </>
    )
}