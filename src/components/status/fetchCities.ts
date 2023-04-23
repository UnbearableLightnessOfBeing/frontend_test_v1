import { QueryFunction } from "@tanstack/react-query";
import type { CityApiResponse } from "../../types";

export const fetchCities: QueryFunction<
    CityApiResponse[],
    ["cities"]
> = async () => {
    const response = await import("../../../cities.json");

    if (!response.default || !response.default.length) {
        throw new Error("Произошла ошибка при загрузке городов");
    }

    // DELAYED RESPONSE SIMULATION

    // const promise: Promise<CityApiResponse[]> = new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve(response.default);
    //     }, 2000);
    // });

    // return await promise;

    return response.default;
};
