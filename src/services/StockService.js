import Axios from 'axios'
import AuthService from '@/services/AuthService'

const api_endpoint = process.env.VUE_APP_CSSHOP_ENDPOINT || "http://localhost:1337"

export default{
    async getItemInStockById(id){
        try{
            let headers = AuthService.getApiHeader()
            let res = await Axios.get(`${api_endpoint}/rewards/${id}`,headers)
            return res.data
        }catch(e){

        }
    }
}