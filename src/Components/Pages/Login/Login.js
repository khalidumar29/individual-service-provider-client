import React from "react";
import { Form } from "react-bootstrap";
import "./Login.css";
import buttonLogo from "./../../../images/buttonlogo.png";
import { navigate, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className='form-wraper'>
      <h1 className='text-primary'>Please Login</h1>
      <Form>
        <Form.Group className='mb-3' controlId='formGroupEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <p style={{ cursor: "pointer" }} className='text-primary'>
          reset your password?
        </p>
        <input className='btn btn-dark' type='submit' value='Login' />
      </Form>
      <p className='mt-3'>
        New to tutor spot?{" "}
        <span
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/signup")}
          className=' text-primary'
        >
          Create New Account
        </span>
      </p>
      <div className='d-flex my-3 justify-content-between align-items-center'>
        <div
          style={{ background: "gray", height: "1.5px", width: "220px" }}
        ></div>
        <div className='mt-3'>
          <p>Or</p>
        </div>
        <div
          style={{ background: "gray", height: "1.5px", width: "220px" }}
        ></div>
      </div>
      <div
        style={{ width: "500px", display: "flex", justifyContent: "center" }}
      >
        <button
          width={300}
          className='btn btn-primary d-flex align-items-center p-2'
        >
          <img width={30} height={30} src={buttonLogo} alt='' />
          <p className='p-0 m-0'>Login With Google</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
