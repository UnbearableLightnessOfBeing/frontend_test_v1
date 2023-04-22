import { SelectField as SelectFieldType } from "../../types";

export const SelectField = (props: SelectFieldType) => {
    return (
        <div className="input-container">
            <select
                className="input-container_input "
                name={props.name}
                id={props.id}
            >
                {props.options.map((city) => {
                    return (
                        <option value={city.name} key={city.name}>
                            {city.name}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};
