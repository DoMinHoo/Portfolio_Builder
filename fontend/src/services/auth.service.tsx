import axios from "axios";
import instance from "../untils/axios";

export const registerAPI = (data: { name: string, email: string, password: string }) =>
    instance.post("/auth/register", data);

export const loginAPI = (data: { email: string, password: string }) =>
    instance.post("/auth/login", data);

export const getProfile = () => instance.get("/profile/me")