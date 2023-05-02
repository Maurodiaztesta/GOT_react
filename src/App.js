import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import HousePage from './pages/HousePage/HousePage';
import CharacterPage from './pages/CharacterPage/CharacterPage';
import CharacterDetailPage from './pages/CharacterDetailPage/CharacterDetailPage';
import HouseDetailPage from './pages/HouseDetailPage/HouseDetailPage';
import ChronologyPage from './pages/CronologyPage/ChronologyPage';
import { LanguageContext } from './shared/context/Language.context';
import { useTranslation } from 'react-i18next';

function App() {

  const {t, i18n} = useTranslation(['translation']);
  const changeLanguaje = (code) => {
    i18n.changeLanguage(code)
  }

  return (
    <main className="main">
        <LanguageContext.Provider value={{t, changeLanguaje}}>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/character" element={<CharacterPage />}></Route>
              <Route path="/character/:id" element={<CharacterDetailPage />}></Route>
              <Route path="/house" element={<HousePage />}></Route>
              <Route path="/house/:id" element={<HouseDetailPage />}></Route>
              <Route path="/chronology" element={<ChronologyPage />}></Route>
            </Routes>
          </Router>
        </LanguageContext.Provider>
    </main>
  );
}

export default App;
