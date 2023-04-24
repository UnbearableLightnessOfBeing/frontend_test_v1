import { useState } from "react";
import { SelectField as SelectFieldType } from "../../types";
import { FieldError } from "./FieldError";

export const SelectField = (props: SelectFieldType) => {
    const [inputValue, setInputValue] = useState(props.value ?? "");

    return (
        <div className="input-container">
            <select
                className={
                    "input-container_input " +
                    (props.pending ? "input-container_input__pending" : "")
                }
                name={props.name}
                id={props.id}
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.currentTarget.value);
                }}
            >
                {props.options.map((city) => {
                    return (
                        <option
                            value={city.name !== "Загрузка..." ? city.name : ""}
                            key={city.name}
                        >
                            {city.name}
                        </option>
                    );
                })}
            </select>
            {props.errored ? <FieldError message={props.errorMessage} /> : null}
        </div>
    );
};
