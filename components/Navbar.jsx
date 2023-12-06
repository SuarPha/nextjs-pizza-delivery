import styles from "../styles/Navbar.module.scss"
import Image from "next/image"
import { useSelector } from "react-redux"
import Link from "next/link"


const Navbar = () => {

  const quantity = useSelector(state=>state.cart.quantity);

  return (
    <div className={styles.container}>
         <div className={styles.item}>
            <div className={styles.callButton}>
                <Image src="/img/call.png" width="35" height="35" alt="" />
            </div>
            <div className={styles.texts}>
                <div className={styles.text}>Order Now!</div>
                <div className={styles.text}>085 888 8889</div>
            </div>
         </div>


         <div className={styles.item}>
          <ul className={styles.list}>
            <Link href="/">
            <li className={styles.listItem}>Home</li>
            </Link>
            <Link href="/shop">
            <li className={styles.listItem}>Shop</li>
            </Link>
              <Link href="/menu" >
              <li className={styles.listItem}>Menu</li>
              </Link>
            <Link href="/">
            <Image src="/img/logo.png" alt="" width="65" height="70" />
            </Link>
            <Link href="/about" >
            <li className={styles.listItem}>About</li>
            </Link>
            <Link href="/contact" >
            <li className={styles.listItem}>Contact Us</li>
            </Link>
          </ul>
         </div>
              <div className={styles.cart}>
                <Link href="/cart">
                    <Image src="/img/cart.png" alt="" width="35" height="40" />
                    <div className={styles.counter}>{quantity}</div>
                 </Link>
                
              </div>
            </div>
  )
}

export default Navbar;