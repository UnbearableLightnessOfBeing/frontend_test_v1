import type { FieldContainer as FieldContainerType } from "./../../types";
import { FieldLabel } from "./FieldLabel";
import { FieldInfo } from "./FieldInfo";

export const FieldContainer = (props: FieldContainerType) => {
    return (
        <div className="field-container">
            <FieldLabel
                label={props.label}
                required={props.required}
                htmlFor={props.htmlFor}
            />
            {props.children}
            {props.infoText ? <FieldInfo text={props.infoText} /> : null}
        </div>
    );
};
