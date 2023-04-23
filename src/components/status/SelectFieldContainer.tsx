import { SelectField } from "./SelectField";
import { useEffect, useState } from "react";
import type { City } from "../../types";
// import data from "../../../cities.json";

export const SelectctFieldContainer = () => {
    const [cities, setCities] = useState<City[]>([]);

    const sortCities = (
        cities: {
            city: string;
            population: string;
        }[]
    ): City[] => {
        cities = cities.filter((city) => +city.population >= 50000);

        cities.sort((a, b) => +a.population - +b.population);

        const largest = cities.pop();

        cities.sort((a, b) => {
            if (a.city < b.city) return -1;
            else if (a.city > b.city) return 1;
            else return 0;
        });

        if (largest) {
            cities.unshift(largest);
        }

        return cities.map((city) => {
            return {
                name: city.city,
            };
        });
    };

    const fetchData = async () => {
        const data = await import("../../../cities.json");

        const result: City[] = sortCities(
            data.default as { city: string; population: string }[]
        );

        setCities(result);
    };

    useEffect((): void => {
        fetchData();
    }, []);

    return <SelectField id="city" name="city" options={cities} />;
};
