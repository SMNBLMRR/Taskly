import axios from "axios";

const request = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
  headers: {
    post: {
      "Content-Type": "application/json"
    }
  },
  withCredentials: true
});

export default request;
