import Axios from 'axios'

const api_endpoint = process.env.VUE_APP_POKEDEX_ENDPOINT || "http://localhost:1337"
const auth_key = "auth-user" // keyName
let auth_service = JSON.parse(localStorage.getItem(auth_key))
const user = auth_service ? auth_service.user: "" 
const jwt = auth_service ? auth_service.jwt: ""

export default{ 
    isAuthen(){ 
        return (user !== "") && (jwt !== "") 
    },
    getApiHeader(){
        if(jwt !== ""){
            return{
                headers:{
                    Authorization: "Bearer " + jwt
                }
            }
        }
        return {}
    },
    getUser(){ 
        return user
    },
    getJwt(){
        return jwt
    },
    async login({email,password}){  
        // จะทำการเรียก POST ไปที่ http://localhost:1337/auth/local
        try{ 
            let url = api_endpoint + "/auth/local"
            let body = {
                identifier: email,
                password: password
            }
            let res = await Axios.post(url, body) 
            if(res.status === 200){ // log in success
                localStorage.setItem(auth_key, JSON.stringify(res.data)) 
                return{
                    success: true,
                    user: res.data.user,
                    jwt: res.data.jwt
                }
            }else{
                console.log("NOT 200", res)
            }
            
        }catch(e){
            if(e.response.status === 400){
                console.error(e.response.data.message[0].messages[0].message)
                return{
                    success: false,
                    message: e.response.data.message[0].messages[0].message 
                }
            }
        }    
    },
    async register({username, email, password}){ 
        // จะทำการเรียก POST ไปที่ http://localhost:1337/auth/local/register
        try{
            let url = `${api_endpoint}/auth/local/register`
            let body = {
                username:username,
                email: email,
                password: password
            }
            let res = await Axios.post(url, body)
            if(res.status === 200){
                localStorage.setItem(auth_key, JSON.stringify(res.data))
                return{
                    success: true,
                    user: res.data.user,
                    jwt: res.data.jwt
                }
            }else{
                console.log("NOT 200", res)
            }
        }catch(e){
            if(e.response.status === 400){
                console.error(e.response.data.message[0].messages[0].message)
                return{
                    success: false,
                    message: e.response.data.message[0].messages[0].message 
                }
            }else{
                return{
                    success: false,
                    message: "Unknown error: " + e.response.data
                }
            }
        }
    },
    logout(){
        localStorage.removeItem(auth_key) // ทำลาย local storage
    }

}