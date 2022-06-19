//import {axiosInstance} from './index'
import axios from 'axios';
const baseURL = "https://navedex-api.herokuapp.com/v1"
export const navers = async ()=>{
  let res = await axios.get(baseURL+'/navers')
  return res.data
}