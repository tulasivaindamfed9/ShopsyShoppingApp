import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  // creating state fro username and password
  const [userName, updateUsername] = useState("");
  const [password, updatePassword] = useState();
  // function ot update username ans password
  function getEmail(e) {
    updateUsername(e.target.value);
    console.log(e.target.value);
  }
  function getPassword(e) {
    updatePassword(e.target.value);
    console.log(e.target.value);
  }
  // function login
  async function handleLogin(e) {
    // try {
    //   const url = await axios.post(
    //     "https://api.escuelajs.co/api/v1/auth/login",
    //     {
    //       email: "john@mail.com",
    //       password: "changeme",
    //     }
    //   );
    //   const response =  url.data.access_token;
    //   console.log(response);
    //   localStorage.setItem("Access_Token",response)
    //   e.preventDefault()
    // } catch (err) {
    //   console.log("login credentials not dound");
    // }

    if (userName === "tulasi" && password === "12") {
      navigate("/apiProducts");
    } else {
      alert("Enter valid username and password");
    }
  }

 
  return (
    <>
      <h1>{userName}</h1>
      <h2>{password}</h2>
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={getEmail}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={getPassword}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </form>
    </>
  );
}
export default Login;
