import "@fontsource-variable/onest";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Cars from "./pages/Cars";
import Home from "./pages/Home";
import { Register } from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/*" element={<ProtectedRoutes />} />
      </Routes>
    </>
  );
}

const ProtectedRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        {/* public routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>
    </>
  );
};

export default App;
