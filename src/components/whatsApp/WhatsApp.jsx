import { IoLogoWhatsapp } from "react-icons/io";

export function WhatsApp({linkWhatsApp, iconWhatsApp}) {
    return (
        <div className={linkWhatsApp}>
            <a
            className={iconWhatsApp}
            href='https://wa.me/5585992641415?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20este%20produto.'
            target="_blank"
            rel="noopener noreferrer"
            >
                <IoLogoWhatsapp />
            </a>
        </div>
    );
}