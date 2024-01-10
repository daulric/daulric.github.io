import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'

import Home from './Pages/Home/index'
//import About from './Pages/About/index'


function PageRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element = {<Home/>}></Route>
            </Routes>
        </Router>
    )
}

export default PageRoutes;