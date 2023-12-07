import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/authContext"
import styles from "./cart.module.css"

export default function Cart() {
  const { cart,removeProductCartHandler } = useContext(AuthContext);
  const [total, setTotal] = useState(0);
  console.log(cart);

  useEffect( ()=> {
    // debugger;
    const totalPrice = cart.reduce( (tot,curPrice)=> {
      return tot + Number(curPrice.product.price);
    },0)
    setTotal(totalPrice);
    console.log("Useeffect checker");
  },[cart])

  const deleteHandlerClick = (prodId) => {
    removeProductCartHandler(prodId);
  }

  return (
    <div className={styles.CartPageBox}>
      <div className={styles.CartPage}>
        This is the cart Page
        {cart.map((prod) => {
          return (
            <div className={styles.productCart} key={prod.product._id}>
              <Link to={`/Products/${prod.product._id}`}>
              <img src={prod.product.imageUrl} />

              </Link>
              <Link to={`/Products/${prod.product._id}`}>
              <p>
                Name: {prod.product.name}
              </p>
              </Link>
              <p>
                Price: {prod.product.price}
              </p>
              <button className={styles.RemoveButton} onClick={()=>deleteHandlerClick(prod.product._id)}>
                Remove
              </button>
            </div>
          )
        })}
        {cart.length !== 0 && (
          <div>
            <h2>Total price: {total}</h2>
          </div>
        )}

        {cart.length === 0 && (
          <div>
            <h2>You have no items in the cart</h2>
          </div>
        )}

      </div>
    </div>
  )

}