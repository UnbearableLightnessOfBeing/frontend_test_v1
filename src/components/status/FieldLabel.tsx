import { FieldLabel as FieldLabelType } from "../../types";

export const FieldLabel = ({ label, required, htmlFor }: FieldLabelType) => {
    return (
        <label className="status-form_label" htmlFor={htmlFor}>
            <h2>{label}</h2>
            {required ? <span>*</span> : null}
        </label>
    );
};
