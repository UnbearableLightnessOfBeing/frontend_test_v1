import { createContext } from "react";
import { FormData as FormDataType } from "../../types";

const StatusFormContext = createContext<
    [FormDataType | null, (formData: FormDataType | null) => void]
>([
    {
        name: "aboba",
        lastname: "lastname",
        city: "City",
        password: "coooleer",
        passwordRe: "cooleer",
        phone: "11111",
        email: "email@email",
    },
    () => {
        return;
    },
]);

export default StatusFormContext;
