import {Route, Routes} from 'react-router-dom';

import HomePage from './pages/homePage/HomePage.jsx';
import OverviewWinesPage from './pages/overviewWinesPage/OverviewWinesPage.jsx';
import RecipeDetailPage from './pages/recipeDetailPage/RecipeDetailPage.jsx';
import WineDetailPage from './pages/wineDetailPage/WineDetailPage.jsx';
import AboutUsPage from './pages/aboutUsPage/AboutUsPage.jsx';
import PersonalAdvicePage from './pages/personalAdvicePage/PersonalAdvicePage.jsx';
import SommeliersPage from './pages/sommeliersPage/SommeliersPage.jsx';
import NewRecipePage from './pages/newRecipePage/NewRecipePage.jsx';
import NewWinePage from './pages/newWinePage/NewWinePage.jsx';
import NotFound from './pages/notFoundPage/NotFoundPage.jsx';

import Navigation from './components/navigation/Navigation.jsx';
import LogoHeader from './components/logoHeader/LogoHeader.jsx';
import Footer from './components/footer/Footer.jsx';

import './App.css'
import OverviewRecipesPage from "./pages/overviewRecipesPage/OverviewRecipesPage.jsx";



function App() {
    return (
        <>
            <header>
                <Navigation/>
                <LogoHeader/>
            </header>
            <main>

                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="about" element={<AboutUsPage/>}/>
                    <Route path="/wines" element={<OverviewWinesPage/>}/>
                    <Route path="/wines/:id" element={<WineDetailPage/>}/>
                    <Route path="/recipes" element={<OverviewRecipesPage/>}/>
                    <Route path="/recipes/:id" element={<RecipeDetailPage/>}/>
                    <Route path="/advice" element={<PersonalAdvicePage/>}/>
                    <Route path="/sommeliers" element={<SommeliersPage/>}/>
                    <Route path="/newwine" element={<NewWinePage/>}/>
                    <Route path="/newrecipe" element={<NewRecipePage/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
            <Footer/>
        </>
    )
}

export default App
