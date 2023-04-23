import { CityApiResponse, City } from "../../types";

const filterByPopulation = (
    cities: CityApiResponse[],
    population: number
): CityApiResponse[] => {
    return cities.filter((city) => +city.population >= +population);
};

const sortByPopulation = (cities: CityApiResponse[]): void => {
    cities.sort((a, b) => +a.population - +b.population);
};

const sortByAlphabet = (cities: CityApiResponse[]): void => {
    cities.sort((a, b) => {
        if (a.city < b.city) return -1;
        else if (a.city > b.city) return 1;
        else return 0;
    });
};

const convertApiResponseToCities = (cities: CityApiResponse[]): City[] => {
    return cities.map((item) => {
        return {
            name: item.city,
        };
    });
};

export const apiResponseToCities = (cities: CityApiResponse[]): City[] => {
    const result = filterByPopulation(cities, 50000);

    sortByPopulation(result);

    const largest = result.pop();

    sortByAlphabet(result);

    if (largest) {
        result.unshift(largest);
    }

    return convertApiResponseToCities(result);
};
