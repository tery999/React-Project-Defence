import { useParams } from "react-router-dom";
import * as ProductService from "../../services/productService"
import { useEffect, useState } from "react";
import styles from "../../../css/productDetailsMenu.module.css";
import * as commentService from "../../services/commentService"


export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        ProductService.getOne(id)
            .then(setProduct)

        commentService.getAllCurComments()
            .then(setComments)
            .then(console.log(comments))
    }, [id])

    const addCommentHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const comment = await commentService.createComment(id,
            formData.get("username"),
            formData.get("addComment"))
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
                <label htmlFor="addComment"> Add new comment </label>
                <form className="commentForm" onSubmit={addCommentHandler}>
                    <input type="text" name="username" placeholder="username" />
                    <textarea name="addComment" placeholder="Add your comment" />
                    <input type="submit" />
                </form>
            </div>
            <div className="ProductComments">
                <h2>Comments:</h2>
                <ul>
                    {comments.map(com => {
                        return (<div>
                            <p>  {com.user} {com.comment} </p>
                        </div>)
                    })}
                </ul>
            </div>

        </div>
    );
}