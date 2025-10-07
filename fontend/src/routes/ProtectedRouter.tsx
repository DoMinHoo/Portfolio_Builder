import type { JSX } from "react";
import { Navigate } from "react-router-dom";

interface Props {
    childrent: JSX.Element
}

export default function ProtectedRouter({ childrent }: Props) {
    const token = localStorage.getItem("token");
    if (!token) return <Navigate to="/auth" replace />
    return childrent
}