import axios from 'axios';

//des que je fais un appel à axios, il prends en compte l'url choisi
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default instance;