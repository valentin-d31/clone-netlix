import "./Row.css"
import {useEffect, useState} from "react";
import axios from "./axios";

export default function Row({title, fetchUrl, isLargeRow = false}) {

    //1.2 fetchUrl->chemin contient la requete
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {

            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData()
    }, [fetchUrl])

    console.log(movies);

    return (
        <div className="row">
            <h2>{title}</h2>
        </div>
    )
}