import InputMask from "react-input-mask";
import { FieldError } from "./FieldError";
import { PhoneField as PhoneFieldType } from "../../types";

export const PhoneField = (props: PhoneFieldType) => {
    return (
        <div className="input-container">
            <InputMask
                mask={props.mask}
                type="tel"
                name="phone"
                placeholder="+7 (***) ***-**-**"
                maskPlaceholder="*"
                className={
                    "input-container_input " +
                    (props.errored ? "input-container_input__errored" : "")
                }
                // onChange={props.onChange}
                // value={props.value}
            />
            {props.errored ? <FieldError message={props.errorMessage} /> : null}
        </div>
    );
};
