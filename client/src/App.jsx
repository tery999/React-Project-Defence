import Header from "./components/header/Header"
import Home from "./components/home/Home"
import { Routes, Route, useNavigate } from "react-router-dom"
import AddProduct from "./components/addProduct/AddProduct"
import LoginForm from "./components/loginForm/LoginForm"
import RegisterForm from "./components/registerForm/RegisterForm"
import ProductDetails from "./components/productDetails/ProductDetails"

function App() {
  return (
    <>
    <Header/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/AddProduct" element={<AddProduct/>} />
        <Route path="/Login" element={<LoginForm/>} />
        <Route path="/Register" element={<RegisterForm/>} />
        <Route path="/Products/:id" element={<ProductDetails/>} />
      </Routes>

    </>
  )
}

export default App
