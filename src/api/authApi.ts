import axiosClient from "../services/axiosClient";
import { TypeLoginForm, TypeRegisterForm } from "../models";

const authApi = {
    login(values : TypeLoginForm): Promise<TypeLoginForm> {
        const url = '/login'
        return axiosClient.post(url, values);
    },
    
    register(values : TypeRegisterForm): Promise<TypeRegisterForm> {
        const url = '/register';
        return axiosClient.post(url, values);
    }
}


export  default authApi;