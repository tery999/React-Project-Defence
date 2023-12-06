import { useContext, useState } from "react"
import styles from "./header.module.css"
import { Link, NavLink } from "react-router-dom"
import AuthContext from "../../context/authContext"

export default function Header() {

  const { isLogged, email } = useContext(AuthContext);

  return (
    <nav className={styles.navStyle}>
      {isLogged && (
        <div className={styles.headerLinks}>
          <p className={styles.hello}>Hello {email}</p>
          <li>
          <NavLink to="/" className={({ isActive }) =>
            isActive ? styles.active : ""
            }>Home</NavLink>
          </li>
          <li>
          <NavLink to="/AddProduct" className={({ isActive }) =>
            isActive ? styles.active : ""
            }>AddProduct</NavLink>
          </li>
          <li>
          <NavLink to="/Cart" className={({ isActive }) =>
            isActive ? styles.active : ""
            }>Cart</NavLink>
          </li>
          <li>
          <NavLink to="/Logout" className={({ isActive }) =>
            isActive ? styles.active : ""
            }>Logout</NavLink>
          </li>
        </div>
      )}
      {!isLogged && (
        <div className={styles.headerLinks}>
          <li>
            <NavLink to="/" className={({ isActive }) =>
            isActive ? styles.active : ""
            }>Home</NavLink>
          </li>
          <li>
          <NavLink to="/Login" className={({ isActive }) =>
            isActive ? styles.active : ""
            }>Login</NavLink>
          </li>
          <li>
          <NavLink to="/Register" className={({ isActive }) =>
            isActive ? styles.active : ""
            }>Register</NavLink>
          </li>
        </div>
      )}

    </nav>
  )
}