import axios from "axios";

const request = axios.create({
    baseURL:"http://localhost:8081",
    headers:{
        post:{
            "Content-Type":"application/json"
        }
    },
    withCredentials:true
})

export default request;