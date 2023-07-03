import axios from "../axios";
import { API_URL } from "../env";


const get = () => {
    return axios.get(API_URL + "users");
}


export default {
    get,
}