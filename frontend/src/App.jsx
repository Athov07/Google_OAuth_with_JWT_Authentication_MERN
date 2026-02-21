import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import Layout from "./components/Layout";
import AuthPage from "./pages/AuthPage";
import LoginSuccess from "./pages/LoginSuccess";
import Home from "./pages/Home";
import { AuthContext } from "./context/AuthContext";

// Protected Route
const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AuthContext);

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Login Page */}
          <Route index element={<AuthPage />} />

          {/* Google Success Page */}
          <Route path="login-success" element={<LoginSuccess />} />

          {/* Protected Home Page */}
          <Route
            path="home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;