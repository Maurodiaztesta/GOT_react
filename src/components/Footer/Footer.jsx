import './Footer.scss'
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer(){
    
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <Link to="/character" className={window.location.pathname === "/character" ?'footer__link active-link': "footer__link"}>{t('characters')}</Link>
            <Link to="/house" className={window.location.pathname === "/house" ?'footer__link active-link': "footer__link"}>{t('houses')}</Link>
            <Link to="/chronology" className={window.location.pathname === "/chronology" ?'footer__link active-link': "footer__link"}>{t('chronology')}</Link>
        </footer>
    )
}