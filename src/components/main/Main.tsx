import { useContext } from "react";
import StatusFormContext from "../status/StatusFormContext";
import "./../../styles/Main.scss";

export const Main = () => {
    const [statusForm] = useContext(StatusFormContext);

    return statusForm ? (
        <div className="page-container">
            <h1 className="page-container_heading">
                <span>Задравствуйте,</span> {statusForm?.name ?? "пользователь"}
            </h1>
            <ul className="status-info">
                <li className="status-info_item">
                    <span>Имя</span> : {statusForm.name}
                </li>
                <li className="status-info_item">
                    <span>Фамилия</span> : {statusForm.lastname}
                </li>
                <li className="status-info_item">
                    <span>Город</span> : {statusForm.city}
                </li>
                <li className="status-info_item">
                    <span>Телефон</span> : {statusForm.phone}
                </li>
                <li className="status-info_item">
                    <span>Email</span> : {statusForm.email}
                </li>
            </ul>
        </div>
    ) : (
        <div className="page-container">
            <h1 className="page-container_heading">
                <span>Задравствуйте,</span> пользователь
            </h1>
        </div>
    );
};
