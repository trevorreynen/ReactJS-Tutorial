import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Experience from './Pages/Experience'
import Navbar from './Components/Navbar'


function App() {
    return (
        <div className='App'>
            <Router>
                <Navbar />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/experience' element={<Experience />} />
                </Routes>

            </Router>
        </div>
    )
}
export default App

/**
 * The /Pages/ directory should only include files that define a single page
 *
 * The /Components/ directory should include components that we might reuse in our application that isn't a page. So, a Navbar or a Footer.
 *
 */
