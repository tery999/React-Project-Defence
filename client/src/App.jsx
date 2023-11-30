import Header from "./components/header/Header"
import Home from "./components/home/Home"
import { Routes, Route, useNavigate } from "react-router-dom"
import AddProduct from "./components/addProduct/AddProduct"
import LoginForm from "./components/loginForm/LoginForm"
import RegisterForm from "./components/registerForm/RegisterForm"
import LogoutForm from "./components/home/logoutForm/LogoutForm"
import ProductDetails from "./components/productDetails/ProductDetails"
import { useState } from "react"
import AuthContext from "./context/authContext"
import * as userService from "./services/userService";

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({})

  const loginHandler = async (values) => {
   const result = await userService.login(values.email , values.password)
   console.log(result);
   setAuth(result);
   localStorage.setItem("accessToken", result.accessToken)
   navigate("/");
  }

  const registerHandler = async(values) => {
    const result = await userService.register(values.email, values.password);
    console.log(result);
    setAuth(result);
    localStorage.setItem("accessToken", result.accessToken)
    navigate("/");
  }

  const logoutHandlder = () => {
    setAuth({});
    localStorage.removeItem("accessToken")
    navigate("/");
  }

  const values = {
    loginHandler,
    registerHandler,
    logoutHandlder,
    email: auth.email,
    isLogged: !!auth.email // double exclamation -> convert to true or false
  }


  return (
    <AuthContext.Provider value={values}>
      <>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/Register" element={<RegisterForm />} />
          <Route path="/Logout" element={<LogoutForm />} />
          <Route path="/Products/:id" element={<ProductDetails />} />
        </Routes>

      </>
    </AuthContext.Provider>
  )
}

export default App
