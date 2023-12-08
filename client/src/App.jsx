import Header from "./components/header/Header"
import Home from "./components/home/Home"
import { Routes, Route, useNavigate } from "react-router-dom"
import AddProduct from "./components/addProduct/AddProduct"
import LoginForm from "./components/loginForm/LoginForm"
import RegisterForm from "./components/registerForm/RegisterForm"
import LogoutForm from "./components/logoutForm/LogoutForm"
import ProductDetails from "./components/productDetails/ProductDetails"
import ProductEdit from "./components/productEdit/ProductEdit"
import MyProducts from "./components/myProducts/MyProducts"
import { PageNotFound } from "./components/404Page/PageNotFound"
import Cart from "./components/cart/Cart"
import { useCallback, useEffect, useMemo, useState } from "react"
import {AuthContext, ContextProvider} from "./context/authContext"
import * as userService from "./services/userService";
import PrivateRoute from "./components/privateRoute/PrivateRoute"

function App() {
 
  return (
    <ContextProvider>
      <>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/Register" element={<RegisterForm />} />
          <Route path="/Products/Details/:id" element={<ProductDetails />} />
          <Route path="*" element={<PageNotFound />} />
          <Route element={<PrivateRoute/>}>
            <Route path="/AddProduct" element={<AddProduct />} />
            <Route path="/Logout" element={<LogoutForm />} />
            <Route path="/Products/:id/Edit" element={<ProductEdit />} />
            <Route path="/MyProducts" element={<MyProducts />} />
            <Route path="Cart" element={<Cart />} />
          </Route>
        </Routes>

      </>
    </ContextProvider>
  )
}

export default App
