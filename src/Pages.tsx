import { Main } from "./components/main/Main";
import { Status } from "./components/status/Status";
import { Routes, Route } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import type {
    FormData as FormDataType,
    LoacalStatusContextType,
} from "./types";
import StatusFormContext from "./components/status/StatusFormContext";
import LoacalStatusContext from "./components/status/LocalStatusContext";

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

    const serializedLocalStatus = localStorage.getItem("localStatusContext");
    const storedLocalStauts = serializedLocalStatus
        ? (JSON.parse(serializedLocalStatus) as LoacalStatusContextType)
        : null;

    const localStatusContext = useState(
        storedLocalStauts ??
            ({ date: "", checked: "off" } as LoacalStatusContextType)
    );

    return (
        <LoacalStatusContext.Provider value={localStatusContext}>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/status" element={<Status />} />
            </Routes>
        </LoacalStatusContext.Provider>
    );
};
