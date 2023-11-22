import Header from "./components/header/Header"
import Home from "./components/home/Home"
import { Routes, Route, useNavigate } from "react-router-dom"

function App() {
  return (
    <>
    <Header/>

      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>

    </>
  )
}

export default App
