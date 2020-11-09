import axios from "axios";

const token = localStorage.getItem('token');

const instance = axios.create({
  baseURL: "https://some-domain.com/api/",
  timeout: 1000,
  headers: { "token": token },
});

export default instance;
