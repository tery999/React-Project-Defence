import styles from "./MyProducts.module.css"
import * as productService from "./../../services/productService"
import { useState, useEffect, useContext } from "react"
import { AuthContext } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";

export default function MyProducts() {
    const [myProd, setMyProd] = useState([]);
    const { userId } = useContext(AuthContext);

    useEffect(() => {
        productService.getAllOwned(userId)
            .then(result => setMyProd(result))
            .then(console.log(myProd))
    }, []);

    const deleteClickHandler = async (id) => {
        await productService.deleteProduct(id);
        const filtered = myProd.filter((prod) => prod._id !== id);
        setMyProd(filtered);
    }

    return (
        <div className={styles.MyProductPageBox}>
            <h2>MyProducts</h2>
            <div className={styles.MyProductLists}>
                {myProd.map((prod) => {
                    return (<div key={prod._id} className={styles.IndividualList}>
                        <img src={prod.imageUrl}
                            onError={event => {
                                event.target.src = "https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"
                                event.onerror = null
                            }} />
                        <h2>{prod.name}</h2>
                        <Link to={`/Products/Details/${prod._id}`}>
                            <button className={styles.View}> View </button>
                        </Link>
                        <Link to={`/Products/${prod._id}/Edit`}>
                            <button className={styles.Edit}> Edit </button>
                        </Link>
                        <button className={styles.Delete} onClick={() => deleteClickHandler(prod._id)}> Delete </button>
                    </div>)
                })}
                {!myProd && (
                    <div className={styles.IfNoItemsBox}>
                        <h2>You have no items for sale </h2>
                        <Link to={`/AddProduct`}>
                            <button className={styles.addItemButton}>Add new product</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>

    )
}