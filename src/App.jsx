import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import ApiProducts from "./components/ApiProducts/ApiProducts";
import LoginRedux from "./components/LoginRedux/LoginRedux";
// import ContextApi from "./components/ContextApi/ContextApi";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/apiProducts" element={<ApiProducts />} />
          {/* <Route path="/contextApi" element={<ContextApi />} /> */}
           <Route path="/loginRedux" element={<LoginRedux />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
