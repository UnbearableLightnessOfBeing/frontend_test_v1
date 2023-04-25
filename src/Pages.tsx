import { Main } from "./components/main/Main";
import { Status } from "./components/status/Status";
import { Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import type { FormData as FormDataType } from "./types";
import StatusFormContext from "./components/status/StatusFormContext";

export const Pages = () => {
    const [statusFormContext, setStatusFormContext] =
        useContext(StatusFormContext);

    useEffect(() => {
        const serializedData = localStorage.getItem("statusFormData");
        const storedData = serializedData
            ? (JSON.parse(serializedData) as FormDataType)
            : null;

        setStatusFormContext(storedData);
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/status" element={<Status />} />
        </Routes>
    );
};
