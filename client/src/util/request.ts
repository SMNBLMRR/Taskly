import axios from "axios";

const request = axios.create({
    baseURL:"http://localhost:8080",
    headers:{
        post:{
            "Content-Type":"application/json"
        }
    }
})
export default request;