import styles from "../../../css/header.module.css"
import {Link} from "react-router-dom"

export default function Header () {
    return (
    <nav className={styles.navStyle}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="AddProduct">Add product</Link>
          </li>
        <a href="">Gallery</a>
        <a href="">Contact</a>
    </nav>
    )
}