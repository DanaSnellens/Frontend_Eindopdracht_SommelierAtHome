
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
import SignUpPage from "./pages/signUpPage/SignUpPage.jsx";
import SendMessagePage from "./pages/sendMessagePage/SendMessagePage.jsx";

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
                    <Route path="/:type" element={<OverviewPage/>}/>
                    <Route path="/:type/:id" element={<DetailPage/>}/>
{/*                    <Route path="/recipes/:id" element={<DetailPage type="recipes" />} />
                    <Route path="/sommeliers/:id" element={<DetailPage type="sommeliers" />} />
                    <Route path="/clients/:id" element={<DetailPage type="clients" />} />*/}
       {/*             //andere naam voor /advice*/}
                    <Route path="/advice" element={<PersonalAdvicePage/>}/>



                    <Route path="/:type/addnew" element={<AddNewPage/>}/>
{/*                    //Aanpassen naar edit page??*/}
                    <Route path="/:type/:id/edit" element={<AddNewPage/>}/>
                    <Route path="/signin" element={<SignInPage/>}/>
                    <Route path="/register" element={<SignUpPage/>}/>
                    <Route path="/signout" element={<Navigate to="/"/>}/>
                    <Route path="/message" element={<SendMessagePage/>}/>
                    <Route path={"/dashboard"} element={isAuth ? <DashboardPage/> : <Navigate to ="/signin"/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
            <Footer/>
        </>
    )
}

export default App
