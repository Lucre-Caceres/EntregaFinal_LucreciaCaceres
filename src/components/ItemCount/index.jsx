import { useState } from "react";
import styles from "./ItemCount.module.css"

const ItemCount=({stock, initial, onAdd})=>{
  const [count, setCount] = useState(initial);  
  
  const suma=()=>{
      if(count>=stock){return;}
      setCount(count+1);
    } 
    
    const resta=()=>{
      if(count===1){return;}
      setCount(count-1);
    }
  
  return(
    <>  
    <div >
          <button className={styles.buttonCounter} type="button" onClick={resta}>- </button>
          <button className={styles.buttonCounter}>{count}</button>
          <button className={styles.buttonCounter} type="button" onClick={suma}>+ </button>
          <button className={styles.buttonCounter} type="button" onClick={()=>onAdd(count)} disabled={count>stock}>Add to cart</button>
        </div>
      
    
    
    
    </>
  
  )
    
}
     

export default ItemCount;