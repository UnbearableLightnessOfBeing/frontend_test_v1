import type { CheckboxField as CheckboxFieldType } from "../../types";

export const CheckboxField = (props: CheckboxFieldType) => {
    return (
        <div className="checkbox-container">
            <input type={props.type} name={props.name} id={props.id} />
            <label htmlFor={props.id}>{props.checkboxLabel}</label>
        </div>
    );
};
