import { useNavigate } from "react-router-dom";
import { loginAPI, registerAPI } from "../services/auth.service";
import { useState } from 'react';

export function useAuth() {
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const login = async (email: string, password: string) => {
        try {
            const res = await loginAPI({ email, password });
            const token = res.data.token;
            localStorage.setItem("token", token);
            setSuccess("Login successful!");
            setTimeout(() => { navigate("/profile"); }, 1000)

        } catch (error: any) {
            console.error("Login failed:", error);
            const msg = error.response?.data?.message || "Đăng nhập thất bại";
            setError(msg);
        }
    }
    const register = async (name: string, email: string, password: string) => {
        try {
            await registerAPI({ name, email, password });
            setSuccess("Registration successful! Please log in.");
            setTimeout(() => { navigate("/auth"); }, 1000)
        } catch (error: any) {
            console.error("Registration failed:", error);
            const msg = error.response?.data?.message || "Đăng ký thất bại";
            setError(msg);
        }
    }

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/auth");
    }

    const getToken = () => localStorage.getItem("token");

    return { login, register, logout, getToken, error, setError, success, setSuccess };

}