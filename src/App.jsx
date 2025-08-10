import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import Home from './components/landing.jsx';
import About from './components/about.jsx';
import Cambooth from './picticApp/cambooth.jsx';

function App() {
    const location = useLocation();
    const hideBar = location.pathname === "/photobooth";

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/photobooth" element={<Cambooth />} />
                <Route path="/customize" element={<></>} />
            </Routes>
            {!hideBar && <Footer />}
        </>
    );
}

export default App;
