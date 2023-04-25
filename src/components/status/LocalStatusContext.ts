import { createContext } from "react";
import { LoacalStatusContextType } from "../../types";

const LoacalStatusContext = createContext<
    [LoacalStatusContextType, (localContext: LoacalStatusContextType) => void]
>([
    {
        date: "",
        checked: "off",
    },
    () => {
        return;
    },
]);

export default LoacalStatusContext;
