import axios from "axios";
import instance from "../untils/axios";
import { data } from "react-router-dom";

export const getMyPortfolio = async () => {
    const res = await instance.get("/portfolio/me");
    return res.data;
}

export const createOrUpdate = async (data: any) => {
    const res = await instance.put("/portfolio", data);
    return res.data;
}