import { Main } from "./components/main/Main";
import { Status } from "./components/status/Status";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import "./styles/App.scss";

function App() {
    console.log(useLocation().pathname);
    return (
        <div id="react-app">
            <header className="header">
                <Link to="/">
                    <h1
                        className={
                            "header_link " +
                            (useLocation().pathname === "/"
                                ? "header_link__active"
                                : "")
                        }
                    >
                        Главная
                    </h1>
                </Link>
                <Link to="/status">
                    <h1
                        className={
                            "header_link " +
                            (useLocation().pathname === "/status"
                                ? "header_link__active"
                                : "")
                        }
                    >
                        Статус
                    </h1>
                </Link>
            </header>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/status" element={<Status />} />
            </Routes>
        </div>
    );
}

export default App;
