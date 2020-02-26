import axios from 'axios'
import qs from 'qs'
const instance = axios.create({

})
instance.interceptors.request.use(config =>{
  config.data = qs.stringify(config.data)
  return config
})
export default instance