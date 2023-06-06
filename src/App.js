import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login/Login";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
        <Route path="/ContactUs" element={<><Navbar /><ContactUs /></>} />
        {/* <Route path="/login" Component={Login} /> */}
        <Route path="/login" element={<Login />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
