import axios from "axios"

const livrosAPI = axios.create({baseURL:"http://localhost:8000/livros"})