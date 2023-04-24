import { useContext } from "react";
import StatusFormContext from "../status/StatusFormContext";
import "./../../styles/Main.scss";

export const Main = () => {
    const [statusForm] = useContext(StatusFormContext);

    return (
        <div className="page-container">
            <h1 className="page-container_heading">
                <span>Задравствуйте,</span> {statusForm?.name ?? "пользователь"}
            </h1>
        </div>
    );
};
