import axios from "axios";

const http = axios.create({
    baseURL: `https://pensador-api.vercel.app`
})

export default http;
