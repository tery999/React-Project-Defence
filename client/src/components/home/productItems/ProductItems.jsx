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
                <img src={imageUrl} />
                <h2>{name}</h2>
                <h2>{price} $</h2>
                <h2>{condition}</h2>
                <Link to={`/Products/${_id}`} className={styles.Details}> 
                <button>Details</button>
                </Link>
        </div>
    );
}