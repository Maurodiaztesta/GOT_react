import './Header.scss'
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../shared/context/Language.context";


export default function Header({data}){

    const {t, changeLanguaje} = useContext(LanguageContext);

    const handleBackClick = () => {
        if (window.location.pathname.startsWith('/character/')) {
            window.location.href = '/character';
        } else if (window.location.pathname.startsWith('/house/')) {
            window.location.href = '/house';
        } 
    }
    const handleInputChange = (e) => {
        data.setSearchValue(e.target.value);
    };
    return(
        <header className='header'>
            <div className='header__divVacio'>
                { (window.location.pathname === "/house" || window.location.pathname === "/character") && <input className='header__divVacio--input' placeholder={t('search')} onChange={handleInputChange} type="text" style={{
                    backgroundImage: "url(/lupa.svg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "25px"

                    }} />}
                { (window.location.pathname.startsWith('/character/') || window.location.pathname.startsWith('/house/')) && <div className='header__divVacio--volver' onClick={handleBackClick}>
                    <img className='header__divVacio--volver--img' src='/arrow.svg' alt='arrow'></img>
                    <p className='header__divVacio--volver--texto'>{t('back')}</p>
                </div>}
            </div>
            <div className='header__language'>
                <Link to="/"><img className='header__language--img' src='/home.svg' alt='home'></img></Link>
                <img className='header__language--img' onClick={() => changeLanguaje("es")} src="/españa.png" alt="españa"></img>
                <img className='header__language--img' onClick={() => changeLanguaje("en")} src="/gran-bretaña.png" alt="gran-bretaña"></img>
            </div>
        </header>
    )
}