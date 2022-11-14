import axios from "axios" 

export const axiosInstance = axios.create({
    baseURL: "http://3.111.213.124/Admin/"
})