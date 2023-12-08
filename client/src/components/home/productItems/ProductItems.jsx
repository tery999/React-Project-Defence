import { Link } from "react-router-dom";
import styles from "../homeCatalog.module.css"

export default function productItems({
    _id,
    name,
    price,
    condition,
    imageUrl,
}) {
    return (
        <div className={styles.allProducts}>
                <img src={imageUrl} 
                onError={ event => {
                    event.target.src = "https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"
                    event.onerror = null
                }}/>
                <h2>{name}</h2>
                <h2>{price} $</h2>
                <h2>{condition}</h2>
                <Link to={`/Products/Details/${_id}`} className={styles.Details}> 
                <button className={styles.button}>Details</button>
                </Link>
        </div>
    );
}