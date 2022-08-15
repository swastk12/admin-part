import axios from "axios" 

export const axiosInstance = axios.create({
    baseURL: "http://15.207.197.246/admin/"
})