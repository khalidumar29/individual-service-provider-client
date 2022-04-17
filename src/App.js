import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/Pages/About/About";
import Blogs from "./Components/Pages/Blogs/Blogs";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import NotFound from "./Components/Pages/NotFound/NotFound";
import SignUp from "./Components/Pages/SignUp/SignUp";
import CheckOut from "./Components/Shared/CheckOut/CheckOut";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";
import RequireAuth from "./Components/Shared/RequireAuth/RequireAuth";

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route
          path='/checkOut'
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        ></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
