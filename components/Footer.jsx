import styles from "../styles/Footer.module.scss"
import Image from "next/image"


const Footer = () => {
  return (
    <div className={styles.container}>
            <div className={styles.item} >
            <Image src="/img/footer.jpg" 
              alt="footer image"
              width="350"
              height="350"
              loading="lazy"
              
            />
            </div>
            <div className={styles.item}>
                    <div className={styles.listItem}>
                      <Image src="/img/logo.png" alt="" width="55" height="55"/>
                        <h2 className={styles.title}>
                        ENJOY, GREAT MOMENT,  
                        WITH OUR TASTY PIZZA!
                      </h2>
                    </div>
            </div>
              <div className={styles.listItem}>
                    <h2 className={styles.title}>
                      LOCATION:
                    </h2>
                    <p className={styles.text}> Mossvägen 123 <br />
                     #888 153 37 Järna</p>
              </div>
              <div className={styles.listItem}>
                    <h2 className={styles.title}>
                      OPEN HOUSE:
                    </h2>
                    <p className={styles.text}>MONDAY UNTIL FRIDAY  <br />
                       09:00 - 23:00 </p>
                    <p>SATURDAY UNTIL SUNDAY <br />
                     10:00 - 21:00 </p>
              </div>
      <div className={styles.footer}>
        <p>&copy; 2023 | All rights reserved. </p>
      </div>
    </div>
  )
}


export default Footer