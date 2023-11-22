import styles from "../../../css/header.module.css"

export default function Header () {
    return (
    <nav className={styles.navStyle}>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Gallery</a>
        <a href="">Contact</a>
    </nav>
    )
}