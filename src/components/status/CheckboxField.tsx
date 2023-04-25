import { useEffect, useState, useContext } from "react";
import type { CheckboxField as CheckboxFieldType } from "../../types";
import LocalStatusContext from "./LocalStatusContext";

export const CheckboxField = (props: CheckboxFieldType) => {
    const [localStatusContext, setLocalChecked] =
        useContext(LocalStatusContext);

    const [checked, setChecked] = useState(
        localStatusContext?.checked ?? "off"
    );

    useEffect((): void => {
        props.onData(checked);
        setLocalChecked(
            Object.assign(localStatusContext, { checked: checked })
        );
        localStorage.setItem(
            "localStatusContext",
            JSON.stringify(localStatusContext)
        );
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
                checked={checked === "on" ? true : false}
                type={props.type}
                name={props.name}
                id={props.id}
            />
            <label htmlFor={props.id}>{props.checkboxLabel}</label>
        </div>
    );
};
