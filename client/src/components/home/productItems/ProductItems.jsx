import { Link } from "react-router-dom";
import styles from "../../../../css/homeCatalog.module.css"

export default function productItems({
    _id,
    name,
    category,
    price,
    condition,
    imageUrl,
}) {
    return (
        <div className={styles.allProducts}>
                <img src={imageUrl} />
                <h2>{name}</h2>
                <h2>{category}</h2>
                <h2>{price}</h2>
                <h2>{condition}</h2>
                <Link to={`/products/${_id}`} className="details-button">Details</Link>
        </div>
    );
}