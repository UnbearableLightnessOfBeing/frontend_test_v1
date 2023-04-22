import { useEffect, useState } from "react";
import type {
    CheckedType,
    CheckboxField as CheckboxFieldType,
} from "../../types";

export const CheckboxField = (props: CheckboxFieldType) => {
    const [checked, setChecked] = useState<CheckedType>("off");

    useEffect((): void => {
        props.onData(checked);
    }, [checked]);

    return (
        <div className="checkbox-container">
            <input
                onChange={() => {
                    if (checked === "on") {
                        setChecked("off");
                    } else {
                        setChecked("on");
                    }
                }}
                value={checked}
                type={props.type}
                name={props.name}
                id={props.id}
            />
            <label htmlFor={props.id}>{props.checkboxLabel}</label>
        </div>
    );
};
