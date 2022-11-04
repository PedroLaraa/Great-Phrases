import axios from "axios";

const http = axios.create({
    baseURL: `https://pensador-api.vercel.app`
})

export const memotecaExport = axios.create({
    baseURL: `https://backend-memoteca.herokuapp.com/pensamentos`
})

export default http;
