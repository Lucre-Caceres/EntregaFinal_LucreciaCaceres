import { createContext, useState } from "react";

export const CartContext=createContext();

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    const addItem=(product,count)=>{
      if(isInCart(product.id)){
        alert("ya está el producto en el carrito");
      } 
      else{
        const newObject = {
          item:product,
          count
        } 
        setCart([...cart,newObject]);
      }         
      
    }

    const removeItem=(id)=>{
      const updatedCart=cart.filter(product=>product.item.id!==id);
    setCart(updatedCart);    
    }
      
    

    const clear=()=>{
    setCart([]);   
    };

    const isInCart=(id)=>{
      return cart.some(product=>product.item.id===id);
        
      } 
    
  
    const sumTotalCart =cart.reduce((acc,product)=>acc+(product.item.price*product.count),0);


 return (
    <CartContext.Provider value={{cart,addItem,removeItem,clear, isInCart, setCart, sumTotalCart}}>
        {children}
    </CartContext.Provider>
  )
 }

export default CartContextProvider;