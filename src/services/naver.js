import {axiosInstance} from './index'

export const navers = async ()=>{
  let res = await axiosInstance.get('/navers')
  return res.data
}