import { useContext, useState } from "react"
import styles from "../../../css/header.module.css"
import { Link } from "react-router-dom"
import AuthContext from "../../context/authContext"

export default function Header() {

  const { isLogged, email } = useContext(AuthContext);
  const [ search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(setSearch);
  }


  return (
    <nav className={styles.navStyle}>
      {isLogged && (
        <div className={styles.headerLinks}>
          <p>Hello {email}</p>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="AddProduct">Add product</Link>
          </li>
          <li>
            <Link to="Cart">Cart</Link>
          </li>
          <li>
            <Link to="Logout">Logout</Link>
          </li>
        </div>
      )}
      {!isLogged && (
        <div className={styles.headerLinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="Login">Login</Link>
          </li>
          <li>
            <Link to="Register">Register</Link>
          </li>
        </div>
      )}
      <div>
        <form className={styles.SearchBar} onSubmit={handleSubmit}>
          <label htmlFor='search'>
            <input
              type="text"
              name="search"
              value={search || ""}
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </form>
      </div>

    </nav>
  )
}