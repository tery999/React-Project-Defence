import Header from "./components/header/Header"
import Home from "./components/home/Home"
import { Routes, Route, useNavigate } from "react-router-dom"
import AddProduct from "./components/addProduct/AddProduct"
import LoginForm from "./components/loginForm/LoginForm"
import RegisterForm from "./components/registerForm/RegisterForm"
import LogoutForm from "./components/home/logoutForm/LogoutForm"
import ProductDetails from "./components/productDetails/ProductDetails"
import ProductEdit from "./components/productEdit/ProductEdit"
import Cart from "./components/cart/Cart"
import { useEffect, useState } from "react"
import AuthContext from "./context/authContext"
import * as userService from "./services/userService";

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(()=> {
    // initial function to delete token , return empty object
    localStorage.removeItem("accessToken");
    return {};
  })
  const [cart, setCart] = useState([]);

  const loginHandler = async (values) => {
    try {
   const result = await userService.login(values.email , values.password)
   console.log(result);
   setAuth(result);
   localStorage.setItem("accessToken", result.accessToken)
   navigate("/");
    } catch (err) {
      console.log(`THIS IS THE ERROR ${err}`)
      throw Error("ERRPR AT LOGIN HANDLER", {err});
    }
  }

  const registerHandler = async(values) => {
    try {
    const result = await userService.register(values.email, values.password);
    console.log(result);
    setAuth(result);
    if(result.accessToken !== undefined) {
    localStorage.setItem("accessToken", result.accessToken)
    }
    navigate("/");
  }catch (err) {
    console.log(`ERROR AT REGISTER HANDLER`);
    throw Error (err);
  }
  }

  const logoutHandlder = () => {
    setAuth({});
    localStorage.removeItem("accessToken")
    navigate("/");
  }

  const searchHandler = async (searchValue) => {

  }

  const cartBuyHandler = (product) => {
    debugger;
    const productExists = cart.some(prod => {
      if (prod.product.name === product.name) {
        return true;
      } else {
        return false;
      }
    });
    console.log("FINAL IS " ,productExists);
    if (productExists === false) {
      setCart(cart => [...cart, {product}]);
    }
  }

  const DoesProductExistInCart = (product) => {
    if (cart.length === 0) {
      return false;
    }
    const productExists = cart.some(prod => {
      if (prod.product.name === product.name) {
        console.log("Product already exists 2")
        return true;
      } else {
        console.log("Product doesnt exist 2")
        return false;
      }
    });

    return productExists;
  }


  useEffect( ()=> {
    console.log(cart)
  },[cart]);

  const values = {
    loginHandler,
    registerHandler,
    logoutHandlder,
    cartBuyHandler,
    DoesProductExistInCart,
    email: auth?.email || null,
    userId: auth?._id || null,
    isLogged: !!auth?.email || null // double exclamation -> convert to true or false
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
          <Route path="/Products/:id/edit" element={<ProductEdit />} />
          <Route path="Cart" element={<Cart/>} />
        </Routes>

      </>
    </AuthContext.Provider>
  )
}

export default App
