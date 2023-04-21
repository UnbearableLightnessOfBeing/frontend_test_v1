import { useParams } from "react-router-dom";

export const Main = () => {
    const params = useParams();
    console.log(params);

    return <h1 className="text-6xl text-sky-400">This is the main page</h1>;
};
