import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const LoginSuccess = () => {
  const navigate = useNavigate();
  const { login, token } = useContext(AuthContext);

  useEffect(() => {
    const urlToken = new URLSearchParams(window.location.search).get("token");

    if (urlToken) {
      login(urlToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      navigate("/home", { replace: true });
    }
  }, [token]);

  return <div>Logging you in...</div>;
};

export default LoginSuccess;
