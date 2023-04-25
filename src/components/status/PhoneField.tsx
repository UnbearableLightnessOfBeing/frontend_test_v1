import InputMask from "react-input-mask";
import { FieldError } from "./FieldError";
import { PhoneField as PhoneFieldType } from "../../types";
import { useEffect, useState } from "react";

export const PhoneField = (props: PhoneFieldType) => {
    const [inputValue, setInputValue] = useState(props.value ?? "");

    useEffect(() => {
        setInputValue(props.value ?? "");
    }, [props.value]);

    return (
        <div className="input-container">
            <InputMask
                mask={props.mask}
                type="tel"
                name="phone"
                placeholder="+7 (***) ***-**-**"
                maskPlaceholder="*"
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.currentTarget.value);
                }}
                className={
                    "input-container_input " +
                    (props.errored ? "input-container_input__errored" : "")
                }
            />
            {props.errored ? <FieldError message={props.errorMessage} /> : null}
        </div>
    );
};
