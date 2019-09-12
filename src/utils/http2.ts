import axios,{AxiosResponse,AxiosRequestConfig} from 'axios'
import {Message} from 'element-ui'
import router from '@/router'

const service = axios.create({
    timeout:10000
})

service.interceptors.request.use((config:AxiosRequestConfig)=>{
    config.headers.Authorization = localStorage.istoken;
    return config;
},(err:any)=>{
    return Promise.reject;
})

service.interceptors.response.use((response:AxiosResponse)=>{
    return response;
},(err:any)=>{
    let errMsg = '';

    if(err && err.response.status) {
        switch(err.response.status) {
            case 401:
                errMsg = '失败'
                localStorage.removeItem('isetoken')
                break;
                default: 
                errMsg = err.response.data.msg;
        }
    }else{
        errMsg = err;
    }
    Message.error(errMsg)
    return Promise.reject(errMsg)

})
export default service;