import { AppHeader } from "./AppHeader";
import { Main } from "./components/main/Main";
import { Status } from "./components/status/Status";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import StatusFormContext from "./components/status/StatusFormContext";
import { useState } from "react";
import type { FormData as FormDataType } from "./types";
import "./styles/App.scss";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
});

function App() {
    const statusForm = useState(null as FormDataType | null);

    return (
        <div id="react-app">
            <BrowserRouter>
                <StatusFormContext.Provider value={statusForm}>
                    <QueryClientProvider client={queryClient}>
                        <AppHeader />
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/status" element={<Status />} />
                        </Routes>
                    </QueryClientProvider>
                </StatusFormContext.Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
