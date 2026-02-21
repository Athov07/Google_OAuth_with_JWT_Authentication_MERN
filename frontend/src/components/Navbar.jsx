import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { logoutAPI } from "../services/authService";


const Navbar = () => {
  const { token, logout } = useContext(AuthContext);
  const navigate = useNavigate();

const handleLogout = async () => {
  try {
    await logoutAPI();
  } catch (err) {
    console.log("Logout API failed:", err.response?.data || err.message);
  }

  logout();
  navigate("/", { replace: true });
};

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div
          className="text-xl font-bold cursor-pointer"
          onClick={() => navigate(token ? "/home" : "/")}
        >
          MyApp
        </div>

        <div className="space-x-4">
          {!token ? (
            <Link to="/">Login/Register</Link>
          ) : (
            <>
              <Link to="/home">Home</Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
