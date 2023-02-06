import "./Banner.css"
import {useEffect, useState} from "react";
import axios from "./axios";
import requests from "./Requests"; //faire attention à bien importer le fichier

export default function Banner() {

    //1.1 import des données depuis API
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1)
                    ]
            );
            return request
        }
        fetchData()
    }, [])

    //console.log(movie)

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;

    }

    return (
        <header className="banner"
                style={{
            backgroundSize: "cover",
                    //1.1 retourne la valeur data.backdrop_path
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.
            backdrop_path}")`,
            backgroundPosition: "center center",
                }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name
                    || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>

            <div className="banner--dadeBottom"/>
        </header>
    )
}