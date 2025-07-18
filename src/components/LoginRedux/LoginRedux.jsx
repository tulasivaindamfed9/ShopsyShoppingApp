import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { testLoginDetails } from "../../Redux_toolkit/Reducers/LoginFormSlice";
import { useNavigate } from "react-router-dom";
function LoginRedux() {
  //   creating state for user login details as obj
  const [userDetails, setUserDetails] = useState({
    username: "Initial name",
    password: "Initial password",
  });
const dispatch=useDispatch()
const navigate=useNavigate()

  function handleUserLoginDetails(e) {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
    console.log(userDetails);
  }

  function handleLogin(e) {
    dispatch(testLoginDetails(userDetails))
    e.preventDefault()
    if(userDetails.username && userDetails.password){
        navigate('/apiProducts')
    }
  }
  return (
    <>
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleUserLoginDetails}
            name="username"
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
            onChange={handleUserLoginDetails}
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </form>
    </>
  );
}
export default LoginRedux;
