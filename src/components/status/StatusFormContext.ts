import { createContext } from "react";
import { FormData as FormDataType } from "../../types";

const StatusFormContext = createContext<
    [FormDataType | null, (formData: FormDataType | null) => void]
>([
    {
        name: "",
        lastname: "",
        city: "",
        password: "",
        passwordRe: "",
        phone: "",
        email: "",
    },
    () => {
        return;
    },
]);

export default StatusFormContext;
