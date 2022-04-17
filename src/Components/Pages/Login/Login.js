import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./Login.css";
import buttonLogo from "./../../../images/buttonlogo.png";
import { useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
    navigate("/");
  };
  return (
    <div className='form-wraper'>
      <h1 className='text-primary'>Please Login</h1>
      <Form onClick={handleSignIn}>
        <Form.Group className='mb-3' controlId='formGroupEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='Enter email'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Password'
          />
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
