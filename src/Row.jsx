import './Row.css'
import {useEffect, useState} from "react";
import axios from "./axios";

export default function Row({title, fetchUrl, isLargeRow = false}) {

    //1.2 fetchUrl->chemin contient la requete
    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        async function fetchData() {

            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData()
    }, [fetchUrl])

    //console.log(movies);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map(movie => (
                    isLargeRow && movie.poster_path ||
                        !isLargeRow && movie.backdrop_path && (
                        <img
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            key={movie.id}
                            src={`${base_url}${
                                isLargeRow ? movie.poster_path : movie.backdrop_path
                            }`}
                            alt={movie.name}
                        />
                    )
                ))}
            </div>
        </div>
    )
}