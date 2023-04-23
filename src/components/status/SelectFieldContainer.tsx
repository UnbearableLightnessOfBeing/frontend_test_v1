import { SelectField } from "./SelectField";
import { useQuery } from "@tanstack/react-query";
import { fetchCities } from "./fetchCities";
import { apiResponseToCities } from "./sortCities";

export const SelectctFieldContainer = () => {
    const result = useQuery(["cities"], fetchCities);

    if (result.isLoading) {
        return (
            <div className="field-container_input-wrapper__pending">
                <SelectField
                    id="city"
                    name="city"
                    options={[{ name: "Загрузка..." }]}
                    pending={result.isLoading}
                />
            </div>
        );
    } else if (result.isError) {
        return <div>Произошла ошибка</div>;
    } else {
        const cities = apiResponseToCities(result.data);

        return (
            <SelectField
                id="city"
                name="city"
                options={cities}
                pending={result.isLoading}
            />
        );
    }
};
