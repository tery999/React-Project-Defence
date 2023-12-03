import { useParams } from "react-router-dom";
import * as ProductService from "../../services/productService"
import { useContext, useEffect, useState } from "react";
import styles from "../../../css/productDetailsMenu.module.css";
import * as commentService from "../../services/commentService"
import AuthContext from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";


export default function ProductDetails() {
    const navigate = useNavigate();
    const { isLogged, email, userId , cartBuyHandler,DoesProductExistInCart} = useContext(AuthContext);
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [comments, setComments] = useState([]);
    const [productExists, setProductExists] = useState(false);

    useEffect(() => {
        ProductService.getOne(id)
            .then(setProduct)

        commentService.getAllCurComments(id)
            .then(setComments)
    }, [id]);

    useEffect( ()=> {
        let existing = DoesProductExistInCart(product)
        setProductExists(existing);
        console.log("Useeffect on does product exist");
    }, [product])


    const addCommentHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const CurComment = await commentService.createComment(id,
            formData.get("addComment"))

        setComments(state => [...state, { ...CurComment, author: { email } }]);
    };

    const deleteClickHandler = async () => {
        await ProductService.deleteProduct(id);
        navigate("/");
    }

    const commentDeleteClickHandler = async (commentId) => {
        await commentService.deleteComment(commentId);
        const filtered = comments.filter((comnt) => comnt._id !== commentId);
        console.log(filtered);
        setComments(filtered);
    }

    const buyClickHandler = (product) => {
        cartBuyHandler(product);
        console.log("butClickHandler activated");
    }
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
                    {product._ownerId === userId && (
                        <div className="Buttons">

                            <Link to={`/Products/${id}/edit`} className="Button"> <button> EDIT </button></Link>

                            <button onClick={deleteClickHandler} className={styles.DeleteButtonProduct}> DELETE </button>
                        </div>
                    )}

                    {product._ownerId !== userId && isLogged && productExists===true && (
                        <div className="Buttons">
                            <button className={styles.DeleteButtonProduct}> Item added </button>
                        </div>
                    )}
                     {product._ownerId !== userId && isLogged && productExists===false &&(
                        <div className="Buttons">
                            <button onClick={()=>
                                {buyClickHandler(product)
                                setProductExists(true);
                                }} className={styles.DeleteButtonProduct}> Buy </button>
                        </div>
                    )}
                </div>
            </div>
            {isLogged && (
                <div>
                    <label htmlFor="addComment"> Add new comment </label>
                    <form className="commentForm" onSubmit={addCommentHandler}>
                        <textarea name="addComment" placeholder="Add your comment" />
                        <input type="submit" />
                    </form>
                </div>
            )}

            {!isLogged && (
                <div>
                    <h2>Please login to comment</h2>
                </div>
            )}

            <div className="ProductComments">
                <h2>Comments:</h2>
                <ul>
                    {comments.map((com) => {
                        return (<div key={com._id}>
                            <p> {com.author.email}:  {com.comment} </p>
                            {com._ownerId === userId && (
                                <button onClick={() => commentDeleteClickHandler(com._id)}
                                    className={styles.DeleteButtonComment}>Delete Comment</button>
                            )}
                        </div>)
                    })}
                </ul>
                {comments.length === 0 && (
                    <h2> There are currently no comments</h2>
                )}
            </div>

        </div>
    );
}