import Header from "./components/header/Header"
import Home from "./components/home/Home"
import { Routes, Route, useNavigate } from "react-router-dom"
import AddProduct from "./components/addProduct/AddProduct"

function App() {
  return (
    <>
    <Header/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/AddProduct" element={<AddProduct/>} />
      </Routes>

    </>
  )
}

export default App
