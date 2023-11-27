import { useParams } from "react-router-dom";
import * as ProductService from "../../services/productService"
import { useEffect, useState } from "react";
import styles from "../../../css/productDetailsMenu.module.css";


export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        ProductService.getOne(id)
            .then(setProduct)
    }, [id])

    return (
        <div className={styles.productDetailsMenu}>
            <div className={styles.productContainer}>
                <div className={styles.productDetailsCard}>
                    <img src={product.imageUrl} />
                </div>
                <div className={styles.productDetailsCard}>
                    <h2 className={styles.title}>{product.name}</h2>
                    <h2> Category: {product.category} </h2>
                    <h2> Price: {product.price} $</h2>
                    <h2> Condition: {product.condition}</h2>
                    <h2> Information: {product.summary}</h2>
                </div>
            </div>
            <div>
                <h2>Comments:</h2>
            </div>

        </div>
    );
}