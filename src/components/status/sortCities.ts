import { CityApiResponse, City } from "../../types";

export const sortCities = (cities: CityApiResponse[]): City[] => {
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
