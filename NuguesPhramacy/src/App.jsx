import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import SignIn from "./pages/SignIn";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Service from "./pages/Service";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/layout/Navbar";

function AppLayout() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/signin" || location.pathname === "/login";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;