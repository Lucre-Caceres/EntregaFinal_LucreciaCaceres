import React, { useContext } from "react";
import CartWidget from "../CartWidget"
import styles from "./navbar.module.css"
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";




const Navbar = () => {
const{cart}=useContext(CartContext);

  return (
    <nav className={styles.contenedor} >
      <ul>
        <Link to="/Home">
          <p className={styles.brand}>La Tiendita</p>
          <li className={styles.list}>Inicio</li>
        </Link> 

        <Link to="category">
        <li className={styles.list}>Categorías</li>
        </Link>
        
        <Link to="item">
        <li className={styles.list}>Productos</li>
        </Link>
        

        <Link to="cart">
        <div className={styles.cartContainer}>
          <li>
            <CartWidget className={styles.list} /> 
            
          </li>
        </div>
        </Link>
      </ul>
      
      <ul className={styles.categoryContainer}>
        <Link to="category/Plastic">
        <li className={styles.categoryList}> Plastic</li>
        </Link>    
        <Link to="category/Metal">
        <li className={styles.categoryList} >Metal</li>
        </Link>
        <Link to="category/Rubber">
        <li className={styles.categoryList} >Rubber</li>
        </Link>
        <Link to="category/Wooden">
        <li className={styles.categoryList} >Wooden</li>
        </Link>
        <Link to="category/Fresh">
        <li className={styles.categoryList} >Fresh</li>
        </Link>
        <Link to="category/Steel">
        <li className={styles.categoryList} >Steel</li>
        </Link>
        <Link to="category/Concrete">
        <li className={styles.categoryList} >Concrete</li>
        </Link>
        <Link to="category/Soft">
        <li className={styles.categoryList} >Soft</li>
        </Link>
        <Link to="category/Frozen">
        <li className={styles.categoryList} >Frozen</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;