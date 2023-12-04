import { useContext } from "react"
import AuthContext from "../../context/authContext"
import styles from "./cart.module.css"

export default function Cart() {
  const { cart } = useContext(AuthContext);
  console.log(cart);
  debugger;
  return (
    <div className={styles.CartPageBox}>
      <div className={styles.CartPage}>
        This is the cart Page
        {cart.map((prod) => {
          return (
            <div className={styles.productCart} key={prod.product._id}>
              <img src={prod.product.imageUrl} />
              <p>
                Name: {prod.product.name}
              </p>
              <p>
                Price: {prod.product.price}
              </p>
            </div>
          )
        })}

        {cart.length === 0 && (
          <div>
            <h2>You have no items in the cart</h2>
          </div>
        )}

      </div>
    </div>
  )

}