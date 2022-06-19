import axios from 'axios';
const baseURL = "https://navedex-api.herokuapp.com/v1"

const axiosInstance = axios.create({
  baseURL,
  
})