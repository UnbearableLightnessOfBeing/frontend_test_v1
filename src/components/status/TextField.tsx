import { useEffect, useState } from "react";
import type { TextField as TextFieldType } from "../../types";
import { FieldError } from "./FieldError";

export const TextField = (props: TextFieldType) => {
    const [inputValue, setInputValue] = useState(props.value ?? "");

    useEffect(() => {
        setInputValue(props.value ?? "");
    }, [props.value]);

    return (
        <div className="input-container">
            <input
                type={props.type}
                name={props.name}
                id={props.id}
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.currentTarget.value);
                }}
                placeholder={props.placeholder}
                className={
                    "input-container_input " +
                    (props.errored ? "input-container_input__errored" : "")
                }
            />
            {props.errored ? <FieldError message={props.errorMessage} /> : null}
        </div>
    );
};
