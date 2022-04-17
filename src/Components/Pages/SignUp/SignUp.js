import { React } from "react";
import { Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import buttonLogo from "../../../images/buttonlogo.png";
const SignUP = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await createUserWithEmailAndPassword(email, password);
  };
  if (error || error1) {
    toast(error?.message || error1?.message);
  }

  if (user || user1) {
    navigate("/");
  }
  return (
    <div className='form-wraper'>
      <h1 className='text-primary'>Sing Up</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formGroupName'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            name='name'
            placeholder='your name'
            required
          />
        </Form.Group>
        {""}
        <Form.Group className='mb-3' controlId='formGroupEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            name='email'
            placeholder='Enter email'
            required
          />
        </Form.Group>
        {""}
        <Form.Group className='mb-3' controlId='formGroupPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            name='password'
            placeholder='Password'
            required
          />
        </Form.Group>
        <input className='btn btn-dark' type='submit' value='Sign Up' />
      </Form>
      <p className='mt-3'>
        if Already have an account?{" "}
        <span
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/login")}
          className=' text-primary'
        >
          please login
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
          <p className='p-0 m-0'>Continue With Google</p>
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUP;
