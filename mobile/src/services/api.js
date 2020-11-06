import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.0.240:3333",
  timeout: 1000
});

export default instance;
