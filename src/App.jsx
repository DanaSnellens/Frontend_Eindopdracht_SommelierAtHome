
import HomePage from './pages/homePage/HomePage.jsx';
import DetailPage from "./pages/detailPage/DetailPage.jsx";
import AboutUsPage from './pages/aboutUsPage/AboutUsPage.jsx';
import PersonalAdvicePage from './pages/personalAdvicePage/PersonalAdvicePage.jsx';
import NotFound from './pages/notFoundPage/NotFoundPage.jsx';
import Navigation from './components/navigation/Navigation.jsx';
import LogoHeader from './components/logoHeader/LogoHeader.jsx';
import Footer from './components/footer/Footer.jsx';
import SignInPage from "./pages/signInPage/SignInPage.jsx";
import DashboardPage from "./pages/dashboardPage/DashboardPage.jsx";

import './App.css'

import {AuthContext} from "./context/AuthContext.jsx";
import {useContext} from "react";
import {Navigate, Route, Routes} from 'react-router-dom';
import AddNewPage from "./pages/addNewPage/AddNewPage.jsx";
import OverviewPage from "./pages/overviewPage/OverviewPage.jsx";

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
                    <Route path="/about" element={<AboutUsPage/>}/>
                    <Route path="/:type" element={<OverviewPage />} />
                    <Route path="/:type/:id" element={<DetailPage/>} />
{/*                    <Route path="/recipes/:id" element={<DetailPage type="recipes" />} />
                    <Route path="/sommeliers/:id" element={<DetailPage type="sommeliers" />} />
                    <Route path="/clients/:id" element={<DetailPage type="clients" />} />*/}
       {/*             //andere naam voor /advice*/}
                    <Route path="/advice" element={<PersonalAdvicePage/>}/>
{/*                    <Route path="/sommeliers" element={<OverviewPage type="sommeliers"/>}/>
                    <Route path="/clients" element={<OverviewPage type="clients"/>}/>
                    <Route path="/requests" element={<OverviewPage type="requests"/>}/>*/}



                    <Route path="/:type/addnew" element={<AddNewPage type="wines"/>}/>
{/*                    <Route path="/recipes/addnew" element={<AddNewPage type="recipes"/>}/>
                    <Route path="/sommeliers/addnew" element={<AddNewPage type="sommeliers"/>}/>
                    <Route path="/clients/addnew" element={<AddNewPage type="clients"/>}/>
                    <Route path="/requests/addnew" element={<AddNewPage type="requests"/>}/>
                    <Route path="/advices/addnew" element={<AddNewPage type="advices"/>}/>*/}

                    <Route path="/signin" element={<SignInPage/>}/>
                    <Route path={"/dashboard"} element={isAuth ? <DashboardPage/> : <Navigate to ="/signin"/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
            <Footer/>
        </>
    )
}

export default App
