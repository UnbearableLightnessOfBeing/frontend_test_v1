import type { TextField as TextFieldType } from "../../types";
import { FieldError } from "./FieldError";

export const TextField = (props: TextFieldType) => {
    return (
        <div className="input-container">
            <input
                type={props.type}
                name={props.name}
                id={props.id}
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
