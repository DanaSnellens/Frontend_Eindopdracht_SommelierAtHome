
import HomePage from './pages/homePage/HomePage.jsx';
import OverviewWinesPage from './pages/overviewWinesPage/OverviewWinesPage.jsx';
import DetailPage from "./pages/detailPage/DetailPage.jsx";
import AboutUsPage from './pages/aboutUsPage/AboutUsPage.jsx';
import PersonalAdvicePage from './pages/personalAdvicePage/PersonalAdvicePage.jsx';
import OverviewSommeliersPage from './pages/overviewSommeliersPage/OverviewSommeliersPage.jsx';
import NewRecipePage from './pages/newRecipePage/NewRecipePage.jsx';
import NewWinePage from './pages/newWinePage/NewWinePage.jsx';
import NotFound from './pages/notFoundPage/NotFoundPage.jsx';
import Navigation from './components/navigation/Navigation.jsx';
import LogoHeader from './components/logoHeader/LogoHeader.jsx';
import Footer from './components/footer/Footer.jsx';
import OverviewRecipesPage from "./pages/overviewRecipesPage/OverviewRecipesPage.jsx";
import SignInPage from "./pages/signInPage/SignInPage.jsx";
import DashboardPage from "./pages/dashboardPage/DashboardPage.jsx";

import './App.css'

import {AuthContext} from "./context/AuthContext.jsx";
import {useContext} from "react";
import {Navigate, Route, Routes} from 'react-router-dom';

function App() {

    const { isAuth } = useContext(AuthContext);

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
                    <Route path="/recipes" element={<OverviewRecipesPage/>}/>
                    <Route path="/wines/:id" element={<DetailPage type="wines" />} />
                    <Route path="/recipes/:id" element={<DetailPage type="recipes" />} />
                    <Route path="/sommeliers/:id" element={<DetailPage type="sommeliers" />} />
                    <Route path="/clients/:id" element={<DetailPage type="clients" />} />
                    <Route path="/advice" element={<PersonalAdvicePage/>}/>
                    <Route path="/sommeliers" element={<OverviewSommeliersPage/>}/>
                    <Route path="/newwine" element={<NewWinePage/>}/>
                    <Route path="/newrecipe" element={<NewRecipePage/>}/>
                    <Route path="/signin" element={<SignInPage/>}/>
                    <Route path={"/dashboard"} element={isAuth ? <DashboardPage/> : <Navigate to ="/authenticate"/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
            <Footer/>
        </>
    )
}

export default App
