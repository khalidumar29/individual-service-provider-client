import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import "./Login.css";
import buttonLogo from "./../../../images/buttonlogo.png";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const emailRef = useRef();
  const navigate = useNavigate();
  const [signInWithGoogle, user1, loading, error] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading1, error2] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
    toast("login success");
  };
  const resetPassword = async (e) => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };
  if (user || user1) {
    navigate(from, { replace: true });
  }
  console.log(error, error2);
  return (
    <div className='form-wraper'>
      <h1 className='text-primary'>Please Login</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className='mb-3' controlId='formGroupEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type='email'
            name='email'
            placeholder='Enter email'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            name='password'
            placeholder='Password'
          />
        </Form.Group>
        {error2 ? <p className='text-danger'>{error2.message}</p> : <></>}
        {error ? <p className='text-danger'>{error?.message}</p> : <></>}
        <p
          onClick={resetPassword}
          style={{ cursor: "pointer" }}
          className='text-primary'
        >
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
          onClick={() => {
            signInWithGoogle();
          }}
          width={300}
          className='btn btn-primary d-flex align-items-center p-2'
        >
          <img width={30} height={30} src={buttonLogo} alt='' />
          <p className='p-0 m-0'>Login With Google</p>
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
