//import {axiosInstance} from './index'
import axios from 'axios';
const baseURL = "https://navedex-api.herokuapp.com/v1"

export const navers = async ()=>{
  let res = await axios.get(baseURL+'/navers')
  return res.data
}

export const createNaver = async (data)=>{
  let res = await axios.post(baseURL+'/navers', data)
  return res.data
}

export const updateNaver = async (data, id)=>{
  let res = await axios.put(`${baseURL}/navers/${id}`, data)
  return res.data
}

export const deleteNaver = async (id)=>{
  let res = await axios.delete(`${baseURL}/navers/${id}`)
  return res.data
}