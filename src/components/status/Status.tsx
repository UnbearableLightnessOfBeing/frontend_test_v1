import { useParams } from "react-router-dom";

export const Status = () => {
    const { id } = useParams();
    console.log("id: ", id);

    return <h1 className="text-6xl text-sky-400">This is the STATUS page</h1>;
};
