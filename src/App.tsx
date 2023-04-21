import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./components/main/Main";
import { Status } from "./components/status/Status";
import "./styles/App.scss";

function App() {
    return (
        <BrowserRouter>
            <header className="header">
                <Link to="/" className="header_link">
                    <h1>Главная</h1>
                </Link>
                <Link to="/status" className="header_link">
                    <h1>Статус</h1>
                </Link>
            </header>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/status" element={<Status />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
