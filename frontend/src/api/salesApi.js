import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/sales",
});

export const createSale = (sale) => API.post("/", sale);

export const getSales = () => API.get("/");

export const getSale = (id) => API.get(`/${id}`);