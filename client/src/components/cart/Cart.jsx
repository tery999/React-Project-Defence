import { useContext } from "react"
import AuthContext from "../../context/authContext"

export default function Cart() {
  const { cart } = useContext(AuthContext);
  console.log(cart);
  debugger;
  return (
  <div className="CartPage">
    This is the cart Page
    {cart.map((prod) => {
      return (
      <div key={prod.product._id}>
        <p>
          Name: {prod.product.name}
        </p>
        <p>
          Price: {prod.product.price}
        </p>
      </div>
      )
    })}

  </div>
  )

}