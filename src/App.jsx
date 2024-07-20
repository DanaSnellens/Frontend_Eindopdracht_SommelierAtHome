import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/homePage/HomePage.jsx';
import OverviewWinesPage from './pages/overviewWinesPage/OverviewWinesPage.jsx'
import WineDetailPage from './pages/WineDetailPage/WineDetailPage.jsx'
import NewWinePage from './pages/NewWinePage/NewWinePage.jsx'
import Navigation from "./components/navigation/Navigation.jsx";

import './App.css'

function App() {


    return (
        <>
            <header>
                <Navigation />

            </header>
            <main>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/wines" element={<OverviewWinesPage/>}/>
                    <Route path="/wines/:id" element={<WineDetailPage/>}/>
                    <Route path="/newwine" element={<NewWinePage/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>

            </main>
            <footer>

            </footer>
        </>
    )
}

export default App
