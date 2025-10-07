import axios from "axios";
import instance from "../untils/axios";

export const registerAPI = (data: { name: string, email: string, password: string }) => {
    return instance.post("/auth/register", data);
}


export const loginAPI = (data: { email: string, password: string }) => {
    return instance.post("/auth/login", data);
}


export const getProfile = () => {
    return instance.get("/auth/me");
} 