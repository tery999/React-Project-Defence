import { useParams } from "react-router-dom";
import * as ProductService from "../../services/productService"
import { useEffect, useState } from "react";
import styles from "../../../css/productDetailsMenu.module.css";
import * as commentService from "../../services/commentService"


export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        ProductService.getOne(id)
            .then(setProduct)
    }, [id])

    const addCommentHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const comment = await commentService.createComment( id ,
            formData.get("username"),
            formData.get("addComment"))

            console.log(comment);

    };



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
            <div>
                <label htmlFor="addComment"> Add new comment </label>
                <form className = "commentForm" onSubmit={addCommentHandler}>
                    <input type="text" name="username" placeholder="username"/>
                <textarea name="addComment" placeholder="Add your comment"/>
                <input type="submit" />
                </form>
            </div>

        </div>
    );
}