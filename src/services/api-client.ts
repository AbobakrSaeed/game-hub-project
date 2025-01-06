import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: '7a070779e17a4967ba2d7972cc88d1bf',
    }
})