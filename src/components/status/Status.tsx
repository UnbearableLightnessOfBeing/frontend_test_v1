import { useLocation } from "react-router-dom";
import { StatusForm } from "./StatusForm";
import StatusFormContext from "./StatusFormContext";
import "./../../styles/Status.scss";
import { useContext } from "react";

export const Status = () => {
    const [statusForm] = useContext(StatusFormContext);

    const location = useLocation();
    console.log("location: ", location);

    return (
        <div className="page-container">
            <h1 className="page-container_heading">
                <span>Задравствуйте,</span> {statusForm?.name ?? "пользователь"}
            </h1>
            <StatusForm />
        </div>
    );
};
