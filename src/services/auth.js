import axios from 'axios';
const baseURL = "https://navedex-api.herokuapp.com/v1"

export const signIn = async (data)=>{
  let res = await axios.post(baseURL+'/users/login', data)
  return res.data
}