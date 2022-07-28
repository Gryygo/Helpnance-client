import axios from "axios";

export const api = axios.create({
  baseURL: "https://helpnance-api.herokuapp.com/" || "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
  }
});
