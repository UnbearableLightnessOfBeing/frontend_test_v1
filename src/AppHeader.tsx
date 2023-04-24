import { Link, useLocation } from "react-router-dom";

export const AppHeader = () => {
    return (
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
    );
};
