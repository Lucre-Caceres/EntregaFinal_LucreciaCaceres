import styles from "./Cart.module.css";
import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import CartItem from "../CartItem";

const Cart = () => {
const {cart,removeItem,clear,sumTotalCart}=useContext(CartContext);
const navigate=useNavigate();

const goToItemDetail=()=>{
  navigate('/');
}
const onHandleCheckOut=()=>{
  navigate('/checkout');
}

  return (
    <>
      <h2>Cart</h2>  
      <button className={styles.cartClear} onClick={()=>clear()}>Clear Cart</button>
      <button className={styles.cartCheckout} onClick={onHandleCheckOut}>Check Out</button>    
      {cart.length===0 && 
         <div>
         <h4>Cart is empty</h4>
         <button className={styles.backButton} onClick={goToItemDetail}>Back</button>
         </div>
      }
      
      {cart?.length>0 && cart.map((product)=>
      
      <CartItem key={product.item.id} product={product} removeItem={removeItem} clear={clear} /> 
      )}      
    <p className={styles.cartTotal}>Total: USD {sumTotalCart}</p>
    
    </>
  )
}

export default Cart;