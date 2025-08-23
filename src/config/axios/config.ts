import axios from "axios";

const ApiRequest = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/", // URL base para todas as requisições
  timeout: 10000, // tempo máximo de espera (10s)
  headers: {
    "Content-Type": "application/json",
  },
});

export default ApiRequest;
