import { useEffect, useState } from 'react';

import * as productService from "../../services/productService"
import ProductItems from "./productItems/ProductItems"
import styles from "../../../css/homeCatalog.module.css"

export default function Home() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        if (search.trim() !== "") {
            const filtered = await productService.SearchProduct(search)
            if (filtered.length !== 0) {
                setProducts(filtered);
            } else {
                setProducts([]);
            }
        } else {

        }
    }


    useEffect(() => {
        productService.getAll()
            .then(result => setProducts(result));
    }, []);

    return (
        <div className={styles.text}>
            <div className='SearchField'>
                <form className={styles.SearchBar} onSubmit={handleSearchSubmit}>
                    <label htmlFor='search'>
                        <input
                            type="text"
                            name="search"
                            id="search"
                            value={search || ""}
                            placeholder="Search"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <input type="submit" value="Search" />
                    </label>
                </form>
            </div>
            <h1>Products List</h1>

            <div className={styles.homeCatalog}>

                {products.map(prod => (
                    <ProductItems key={prod._id} {...prod} />
                ))}

                {products.length === 0 && (
                    <h3 className="no-articles">No articles yet</h3>
                )}
            </div>
        </div>
    );
}