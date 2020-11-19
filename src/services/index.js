import axios from "axios";

const axiosCall=(method,url,data,headers)=>{
    let URL=`${process.env.REACT_APP_API_URL}${url}`
    if(method==="GET"){
        return axios.get(URL,data,headers)
    }
    if(method==="POST"){
        return axios.post(URL,data,headers)
    }
    if(method==="PUT"){
        return axios.put(URL,data,headers)
    }
    if(method==="DELETE"){
        return axios.delete(URL,data,headers)
    }

}
export default axiosCall;