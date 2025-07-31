// Header.jsx
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CustomModalPopup from "../CustomModalPopup/CustomModalPopup";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";

export default function Header() {
  const [isLogin, setIsLogin] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [message, setMessage] = React.useState("");

const cartItems=useSelector(state=>state.cart.items)
console.log(cartItems)
  const navigate = useNavigate();

  const handleLogin = () => {
    setOpenModal(true);
  };

  const handleLogout = () => {
    setIsLogin(false);
    navigate("/");
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSuccessfulLogin = () => {
    setIsLogin(true);
    setOpenModal(false);
  };

  const handleCart = () => {
    navigate("/cart");
  };

  const handleTest = () => {
    setMessage("hello");
    setTimeout(() => {
      setMessage(""); // Clear after 5 seconds
    }, 5000);
  };

  return (
    <>
      <AppBar
        position="fixed"
        className="header-appbar"
      >
        <Toolbar className="header-toolbar header-toolbar-styled">
          <div className="header-left header-left-styled">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWQPdTGBySK7P6_xFHNQBZul-dtAPEgWIdHg&s"
              alt="Shopsy Logo"
              className="header-logo header-logo-styled"
            />
            <Typography
              variant="h5"
              className="header-title header-title-styled"
            >
              Shopsy
            </Typography>
          </div>

          {isLogin ? (
            <div className="header-buttons header-buttons-styled">
              <Button
                color="inherit"
                onClick={handleLogout}
                className="header-btn header-logout-btn"
              >
                Logout
              </Button>
              <button
                className="cart-btn header-btn header-cart-btn"
                onClick={handleCart}
              >
                Cart({cartItems.length})
              </button>
              <button
                className="test-btn header-btn header-test-btn"
                onClick={handleTest}
              >
                Test
              </button>
            </div>
          ) : (
            <Button
              color="inherit"
              onClick={handleLogin}
              className="header-btn header-login-btn"
            >
              Login
            </Button>
          )}

          <CustomModalPopup
            open={openModal}
            onClose={handleCloseModal}
            onLoginSuccess={handleSuccessfulLogin}
          />
        </Toolbar>
      </AppBar>

      {/* Add margin bottom to header to push content below */}
      <div className="header-margin-bottom"></div>

      {message && (
        <Box className="message-box">
          <Typography variant="body1">{message}</Typography>
        </Box>
      )}
    </>
  );
}