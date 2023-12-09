import styles from "./PageNotFound.module.css"

export const PageNotFound = () => {
    return (
        <div className={styles.notFoundBox}>
            <img src="/Panda404Error.png" />
        </div>
    );
}