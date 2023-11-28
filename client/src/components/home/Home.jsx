import { useEffect, useState } from 'react';

import * as productService from "../../services/productService"
import ProductItems from "./productItems/ProductItems"
import styles from "../../../css/homeCatalog.module.css"

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productService.getAll()
            .then(result => setProducts(result));
    }, []);

    return (
        <div className={styles.text}>
            <h1>Products List</h1>

            <div className={styles.homeCatalog}>

            {Object.values(products).map(prod => (
                <ProductItems key={prod._id} {...prod} />
            ))}

            {products.length === 0 && (
                <h3 className="no-articles">No articles yet</h3>
            )}
             </div>
        </div>
    );
}