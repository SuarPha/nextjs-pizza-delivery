import styles from "../styles/Services.module.scss"
import Image from "next/image"


const Services = () => {
  return (
    <div className={styles.container}>
        <div className={styles.row}>
            <h1  className={styles.title}>Our Services</h1>
            <hr />
            <div className={styles.rowIcons}>
            <div className={styles.itemIcons}>
            <div  className={styles.icons}>
              
                <div className={styles.icon}>
                    <Image src="/img/order.png" width="150" height="150" alt=""/>
                    <h3 className={styles.textTitle}>Order Your Food</h3>
                    <p className={styles.textDesc}>
                    Lorem ipsum dolor sit amet, </p>
                </div>
                <div className={styles.icon}>
                    <Image src="/img/delivery.png" width="150" height="150" alt=""/>
                    <h3 className={styles.textTitle}>Delivery or pick up</h3>
                    <p className={styles.textDesc}>
                    Lorem ipsum dolor sit amet, </p>
                </div>
                <div className={styles.icon}>
                    <Image src="/img/receipe.png" width="150" height="150" alt=""/>
                    <h3 className={styles.textTitle}>Delicious Receipe</h3>
                    <p className={styles.textDesc}>
                    Lorem ipsum dolor sit amet, </p>
                </div>
                </div>
                </div>
                </div>
            </div>
     
    </div>
  )
}

export default Services