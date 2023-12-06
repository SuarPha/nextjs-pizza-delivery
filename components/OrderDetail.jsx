import { useState } from "react"
import styles from "../styles/OrderDetail.module.scss"

const OrderDetail = ({total, createOrder}) => {
    const [customer, setCustomer] = useState("");
    const [address, setAddress] = useState("");

    const handleClick = () =>{
      createOrder({customer, address, total, method: 0});

    }
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Your payment after delivery: 129Kr</h2>
            <div className={styles.item}>
                <label className={styles.label}>Name Surname: </label>
                <input 
                 placeholder="John Doe" 
                 type="text"
                 className={styles.input} 
                 onChange={(e)=> setCustomer(e.target.value)}/>
            </div>
            <div className={styles.item}>
              <label className={styles.label}>Phon Number</label>
              <input type="text" placeholder=" +079 888 8886"  
               className={ styles.input} />
            
            </div>
            <div className={styles.item}>
              <label className={styles.label}>Address</label>
              <textarea
            rows={5}
            placeholder="Nygatan 123 Stockholm"
            type="text"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
            />
            </div>
            <button className={styles.button} onClick={handleClick}>Order Now</button>
        </div>
    </div>
  )
}

export default OrderDetail