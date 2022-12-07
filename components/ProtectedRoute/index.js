import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute(props) {
    const { Component } = props;
    const navigate = useNavigate();

    const loggedInUser = localStorage.getItem("loggedInUser");
    const parsedUser = JSON.parse(loggedInUser || '""');

    useEffect(() => {
        if (!parsedUser) {
            navigate("/login");
        }
    }, [])
    return <Component />
}

export { ProtectedRoute }