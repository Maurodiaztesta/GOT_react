import './HomePage.scss'
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useContext } from 'react';
import { LanguageContext } from '../../shared/context/Language.context';


export default function HomePage(){
    const {t, changeLanguaje} = useContext(LanguageContext);

    return(
        <div className='divPadre' style={{backgroundImage: "url(/background.png)"}}>
            <Header></Header>
            <h1 className='divPadre__titulo'>{t('gameThrones')}</h1>
            <Footer></Footer>
        </div>
    )
}