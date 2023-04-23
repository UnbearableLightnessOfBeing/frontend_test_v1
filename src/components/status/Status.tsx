import { useLocation } from "react-router-dom";
import { StatusForm } from "./StatusForm";
import "./../../styles/Status.scss";

export const Status = () => {
    const location = useLocation();
    console.log("location: ", location);

    return (
        <div className="page-container">
            <h1 className="page-container_heading">
                <span>Задравствуйте,</span> пользователь
            </h1>
            <StatusForm />
        </div>
    );
};
