import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ProtectedRoute(props) {
  const { Component } = props;
  const navigate = useNavigate();

  const loggedInUserLocalStorage = localStorage.getItem("loggedInUser");

  const parsedUser = JSON.parse(loggedInUserLocalStorage || '""');

  useEffect(() => {
    if (!parsedUser.token) {
      navigate("/login");
    }
  }, []);

  return <Component />;
}